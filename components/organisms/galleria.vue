<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref(0);

const setActive = (index: number) => {
  activeIndex.value = index;
}

const { images } = defineProps<{
  images: {
    url: string;
    thumbnail: string;
  }[]
}>()

</script>

<template>
  <div class="galleria">
    <div class="galleria-main">
      <NuxtImg :src="images[activeIndex].url" format="webp" loading="lazy" sizes="xs:100vw" />
    </div>
    <div class="galleria-thumbnails">
      <div v-for="(image, index) in images" :key="index" class="galleria-thumbnail"
        :class="{ active: index === activeIndex }" @click="setActive(index)">
        <NuxtImg :src="image.thumbnail" format="webp" loading="lazy" sizes="xs:100vw" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.galleria {
  display: flex;
  flex-direction: column;
  align-items: center;

  .galleria-main {
    img {
      width: 100%;
      border-radius: 0.5rem;
      transition: transform 0.3s ease;
      max-width: 700px;
      height: auto;

      @media (max-width: 1280px) {
        max-width: 500px;
      }
    }

    img:hover {
      transform: scale(1.05);
    }
  }

  .galleria-thumbnails {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 16px;

    .galleria-thumbnail {
      border: 2px solid transparent;
      border-radius: 4px;
      cursor: pointer;
      overflow: hidden;
      transition: border-color 0.3s ease;

      img {
        display: block;
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 4px;
        transition: transform 0.3s ease;
      }

      &.active {
        border: 1px solid var(--primary);
        cursor: not-allowed;
      }
    }
  }
}
</style>
