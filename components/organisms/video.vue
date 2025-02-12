<script setup lang="ts">
defineProps<{
  videoUrl?: string
}>()
</script>

<template>
  <div class="video-container">
    <iframe :src="`${videoUrl}`" title="YouTube video player" frameborder="0" class="iframe"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
  </div>
</template>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 500px;
  aspect-ratio: 16 / 9;
  margin: 48px auto 0;
}

.iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
