<template>
  <div
    class="upload-container"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="onDragLeave"
    @drop.prevent="onDrop"
    :class="{ 'is-dragging': isDragging }"
  >
    <input
      type="file"
      ref="fileInput"
      @change="onFileChange"
      accept="image/*"
      multiple
      style="display: none;"
    />
    <div class="upload-area">
      <p>Suelta las imágenes aquí o <span @click="triggerFileInput">selecciona desde tu dispositivo</span></p>
    </div>
    <div class="preview-container" v-if="files.length > 0">
      <div v-for="(file, index) in files" :key="index" class="preview-item">
        <img :src="file.url" alt="Preview" class="preview-image" />
        <button @click="removeFile(index)" class="remove-button">×</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const isDragging = ref(false);
    const files = ref([]);
    const fileInput = ref(null);

    function triggerFileInput() {
      fileInput.value.click();
    }

    function onFileChange(event) {
      const selectedFiles = event.target.files;
      handleFiles(selectedFiles);
    }

    function onDragOver() {
      isDragging.value = true;
    }

    function onDragLeave() {
      isDragging.value = false;
    }

    function onDrop(event) {
      isDragging.value = false;
      const droppedFiles = event.dataTransfer.files;
      handleFiles(droppedFiles);
    }

    function handleFiles(filesList) {
      for (let i = 0; i < filesList.length; i++) {
        const file = filesList[i];
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e) => {
            files.value.push({ file: file, url: e.target.result });
          };
          reader.readAsDataURL(file);
        }
      }
    }

    function removeFile(index) {
      files.value.splice(index, 1);
    }

    return {
      isDragging,
      files,
      fileInput,
      triggerFileInput,
      onFileChange,
      onDragOver,
      onDragLeave,
      onDrop,
      removeFile
    };
  }
};
</script>

<style lang="scss" scoped>
.upload-container {
  border: 2px dashed #ccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: border-color 0.3s ease;

  &.is-dragging {
    border-color: #42b983;
  }

  .upload-area {
    p {
      margin: 0;
      font-size: 16px;

      span {
        color: #42b983;
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }

  .preview-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    .preview-item {
      position: relative;
      margin: 10px;
      width: 100px;
      height: 100px;

      .preview-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
      }

      .remove-button {
        position: absolute;
        top: -10px;
        right: -10px;
        background: #ff4d4d;
        border: none;
        color: white;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        cursor: pointer;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
      }
    }
  }
}
</style>