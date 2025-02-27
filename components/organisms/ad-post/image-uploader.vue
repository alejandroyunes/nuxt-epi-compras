<script setup lang="ts">
import { ref } from 'vue'
import ExitSvg from '~/components/icons/ExitSvg.vue';

const isDragging = ref(false)
const files = ref<{ file: File, url: string | undefined }[]>([]);
const fileInput = ref()

function triggerFileInput() {
  fileInput.value.click()
}

function onFileChange(event: Event) {
  const selectedFiles = (event.target as HTMLInputElement).files
  if (selectedFiles) {
    handleFiles(selectedFiles)
  }
}

function onDragOver() {
  isDragging.value = true
}

function onDragLeave() {
  isDragging.value = false
}

function onDrop(event: DragEvent) {
  isDragging.value = false
  const droppedFiles = event.dataTransfer?.files
  if (droppedFiles) {
    handleFiles(droppedFiles)
  }
}


function handleFiles(filesList: FileList | File[]) {
  const remainingSlots = 3 - files.value.length

  for (let i = 0; i < filesList.length && i < remainingSlots; i++) {
    const file = filesList[i]
    if (file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (e) => {
        files.value.push({ file: file, url: e.target?.result as string })
      };
      reader.readAsDataURL(file)
    }
  }
}

function removeFile(index: number) {
  files.value.splice(index, 1)
}

</script>

<template>
  <div class="upload-container" @dragover.prevent="onDragOver" @dragleave.prevent="onDragLeave" @drop.prevent="onDrop"
    :class="{ 'is-dragging': isDragging }">
    <input type="file" ref="fileInput" @change="onFileChange" accept="image/*" multiple style="display: none;" />
    <div class="upload-area">
      <p class="select-device">Suelta las imágenes aquí o </p>
      <p><span @click="triggerFileInput">selecciona desde tu dispositivo</span></p>
    </div>
    <div class="preview-container" v-if="files.length > 0">
      <div v-for="(file, index) in files" :key="index" class="preview-item">
        <NuxtImg :src="file.url" alt="Preview" class="preview-image" />
        <div class="remove-button" @click="removeFile(index)">
          <ExitSvg />
        </div>
      </div>
    </div>
    <p v-if="files.length >= 3" class="limit-message">Límite de 3 imágenes alcanzado.</p>
  </div>
</template>

<style lang="scss" scoped>
.upload-container {
  outline: 2px dashed var(--text-soft);
  border-radius: 10px;
  padding: 1.2rem;
  text-align: center;
  transition: border-color 0.3s ease;

  &.is-dragging {
    outline-color: var(--success);
    outline-width: .3rem;
  }

  .upload-area {
    p {
      margin: 0;
      font-size: 1rem;
      display: inline;

      span {
        color: var(--success);
        cursor: pointer;
        text-decoration: underline;
      }
    }

    @media screen and (max-width: 758px) {
      .select-device {
        display: none;
      }
    }


    .limit-message {
      color: var(--error);
      font-size: 14px;
      margin-top: 10px;
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