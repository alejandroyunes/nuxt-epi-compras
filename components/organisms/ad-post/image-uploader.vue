<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import ExitSvg from '~/components/icons/ExitSvg.vue'
import Notification from '~/components/atoms/notification.vue'
import type { NotificationType } from '~/components/atoms/notification.vue'

const props = defineProps<{ files: { file: File; url: string | undefined }[] }>()
const emit = defineEmits(['update:files'])

const isDragging = ref(false)
const fileInput = ref<HTMLInputElement>()
const notification = ref<NotificationType | null>(null)

const MAX_WIDTH = 600
const MAX_HEIGHT = 580
const MAX_FILE_SIZE = 5 * 1024 * 1024   // 5MB

async function resizeImage(file: File): Promise<File> {
  return new Promise((resolve) => {
    const img = new Image()
    const reader = new FileReader()

    reader.onload = (e) => {
      img.src = e.target?.result as string
    };

    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')!
      let { width, height } = img

      // Calculate new dimensions while preserving aspect ratio
      if (width > MAX_WIDTH || height > MAX_HEIGHT) {
        const aspectRatio = width / height
        if (width > MAX_WIDTH) {
          width = MAX_WIDTH
          height = width / aspectRatio
        }
        if (height > MAX_HEIGHT) {
          height = MAX_HEIGHT
          width = height * aspectRatio
        }
      }

      // Set canvas dimensions
      canvas.width = width
      canvas.height = height

      // Draw resized image
      ctx.drawImage(img, 0, 0, width, height)

      // Convert canvas to Blob and then to File
      canvas.toBlob((blob) => {
        if (blob) {
          const resizedFile = new File([blob], file.name, {
            type: file.type,
            lastModified: file.lastModified,
          });
          resolve(resizedFile)
        }
      }, file.type, 0.9); // 0.9 is JPEG quality (adjustable)
    };

    reader.readAsDataURL(file);
  });
}

async function handleFiles(filesList: FileList | File[]) {
  const remainingSlots = 3 - props.files.length

  if (remainingSlots <= 0) {
    notification.value = null
    setTimeout(() => {
      notification.value = { message: "Solo se pueden subir hasta 3 imágenes.", type: "warning" }
    }, 50)
    return
  }

  const newFiles: { file: File; url: string | undefined }[] = [...props.files]

  for (let i = 0; i < filesList.length && newFiles.length < 3; i++) {
    const file = filesList[i]
    if (file.type.startsWith('image/')) {
      if (file.size > MAX_FILE_SIZE) {
        notification.value = null
        setTimeout(() => {
          notification.value = { message: `El archivo ${file.name} excede el límite de 5MB.`, type: "error" }
        }, 50)
        console.error(`El archivo ${file.name} excede el límite de 5MB.`)
        return
      }

      try {
        const resizedFile = await resizeImage(file)
        const url = URL.createObjectURL(resizedFile)
        newFiles.push({ file: resizedFile, url })

      } catch (error) {
        console.error(`Error procesando ${file.name}:`, error)
        notification.value = null
        setTimeout(() => {
          notification.value = { message: `No se pudo cargar ${file.name}.`, type: "error" };

        }, 50)
      }
    }
  }

  emit('update:files', newFiles.slice(0, 3))
}

function triggerFileInput() {
  fileInput.value?.click()
}

function onFileChange(event: Event) {
  const selectedFiles = (event.target as HTMLInputElement).files;
  if (selectedFiles) handleFiles(selectedFiles);
}

function onDragOver() {
  isDragging.value = true
}

function onDragLeave() {
  isDragging.value = false;
}

function onDrop(event: DragEvent) {
  isDragging.value = false
  const droppedFiles = event.dataTransfer?.files
  if (droppedFiles) handleFiles(droppedFiles)
}

function removeFile(index: number) {
  const newFiles = [...props.files]
  if (newFiles[index].url) {
    URL.revokeObjectURL(newFiles[index].url)
  }
  newFiles.splice(index, 1)
  emit('update:files', newFiles)
}

onUnmounted(() => {
  props.files.forEach((fileObj) => {
    if (fileObj.url) {
      URL.revokeObjectURL(fileObj.url);
    }
  })
})

</script>

<template>
  <Notification v-if="notification" :type="notification.type" :message="notification.message" />

  <div class="upload-container" @dragover.prevent="onDragOver" @dragleave.prevent="onDragLeave" @drop.prevent="onDrop"
    :class="{ 'is-dragging': isDragging }">

    <input type="file" ref="fileInput" @change="onFileChange" accept="image/*" multiple style="display: none;" />

    <div class="upload-area">
      <span class="select-device">Arrastra aquí o </span>
      <span class="select-file" @click="triggerFileInput">selecciona las imagenes de tu dispositivo</span>
    </div>

    <div class="preview-container" v-if="files.length > 0">
      <div v-for="(file, index) in files" :key="index" class="preview-item">
        <NuxtImg :src="file.url" alt="Preview" class="preview-image" />
        <div class="remove-button" @click="removeFile(index)">
          <ExitSvg />
        </div>
      </div>
      <span v-if="files.length > 3" class="limit-message">3 imágenes máximo</span>
    </div>

  </div>

</template>

<style lang="scss" scoped>
.upload-container {
  outline: 2px dashed var(--text-soft);
  border-radius: 10px;
  padding: 1.2rem;
  text-align: center;
  transition: border-color 0.3s ease;
  margin-top: .6rem;


  &.is-dragging {
    outline-color: var(--success);
    outline-width: .3rem;
  }

  .upload-area {

    span {
      margin: 0;
      font-size: 1.125rem;
      display: inline;
    }

    .select-file {
      color: var(--success);
      cursor: pointer;
      text-decoration: underline;
    }

    @media screen and (max-width: 758px) {
      .select-device {
        display: none;
      }
    }

  }

  .preview-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;

    .preview-item {
      position: relative;
      margin: 0 .6rem .5rem;
      width: 100px;
      height: 100px;

      .preview-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: var(--shadow);
      }

      .remove-button {
        cursor: pointer;
        position: absolute;
        top: -10px;
        right: -10px;
        background-color: var(--danger);
        border-radius: 50%;
        width: 26px;
        height: 26px;
        line-height: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          width: 20px;
          height: 20px;
          fill: var(--white);
        }
      }
    }
  }

}
</style>