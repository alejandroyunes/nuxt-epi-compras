<script setup lang="ts">
import { ref } from 'vue'
import type { ProductDetails } from '~/types/product-details'

const { info } = defineProps<{
  info?: ProductDetails['tableOfContent']
}>()

const isDropdownVisible = ref(false)

const showDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value
}

const hideDropdown = () => {
  isDropdownVisible.value = false
}

</script>

<template>
  <div class="accordion-container">
    <div class="wrapper" @click="showDropdown" @mouseleave="hideDropdown">
      <button class="trigger">
        <span class="text">Table of Content</span>
        <span class="caret" :class="{ 'caret-active': isDropdownVisible }"></span>
      </button>
      <div v-if="isDropdownVisible" class="menu">
        <div v-for="item in info">
          <NuxtLink :to="item.id" class="item">
            {{ item.content }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accordion-container {
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 800px;
  border-radius: 10px;
  margin: 0 auto;

  .wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 0 24px;

    .trigger {
      background-color: transparent;
      color: var(--text);
      border: 2px solid var(--secondary);
      border-radius: 8px;
      padding: 14px 15px;
      cursor: pointer;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      transition: all 0.3s ease;
      width: 100%;

      &:hover {
        background-color: rgba(52, 73, 94, 0.2);
        border-color: #3498db;
      }

      .text {
        font-weight: 600;
        font-size: 1.3rem;
      }

      .caret {
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid var(--text);
        transition: transform 0.3s ease;

        &.caret-active {
          transform: rotate(180deg);
        }
      }
    }

    .menu {
      position: absolute;
      top: 100%;
      right: 0;
      background-color: white;
      width: 100%;
      ;
      border-radius: 5px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      z-index: 10;

      .item {
        color: var(--text);
        font-size: 1.2rem;
        padding: 12px 20px;
        text-decoration: none;
        display: block;
        transition: background-color 0.2s ease;

        &:hover {
          background-color: #f1f3f4;
          color: var(--primary);
        }

        &:not(:last-child) {
          border-bottom: 1px solid #ecf0f1;
        }
      }
    }
  }
}
</style>