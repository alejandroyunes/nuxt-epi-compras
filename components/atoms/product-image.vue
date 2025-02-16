<script setup>
import { ref } from "vue"

// const { images } = defineProps(['images'])
const images = ref([
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
  "https://placehold.co/600x400",
])

const currentIndex = ref(0);

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
}
</script>

<template>
  <div class="slider-container">
    <div class="slider" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <NuxtImg v-for="(image, index) in images" :key="index" :src="image" class="slide" alt="Slider Image" />
    </div>

    <button class="prev-button" @click="prevSlide">&#10094;</button>
    <button class="next-button" @click="nextSlide">&#10095;</button>
  </div>
</template>


<style scoped>
.slider-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.slider {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  width: 100%;
  flex-shrink: 0;
}

.prev-button, .next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--background);
  border: none;
  padding: .8rem .6rem;
  cursor: pointer;
  border-radius: 25px;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}
</style>
