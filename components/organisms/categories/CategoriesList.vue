<script setup lang="ts">
import Title from '~/components/atoms/title/Title.vue'

import { categories } from './categoriesData'

</script>

<template>
    <Title :view="'ver más'" :title="'Categorías'" />

    <ul>
      <li v-for="category in categories" :key="category.name">
        <NuxtLink :to="category.url">
          <img :src="category.image" :alt="category.alt" width="76px" height="76px">
          <h3>{{ category.name }}</h3>
        </NuxtLink>
      </li>
    </ul>
</template>

<style scoped lang="scss">
  ul {
    display: flex;
    justify-content: space-between;
    padding: 0;
    list-style: none;
    overflow-x: scroll;
    overflow-y: hidden;
    margin-top: 24px;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--border);
      border-radius: 10px;
    }
  }

  li {
    scroll-snap-align: start;
    text-align: center;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 32px;

    @media (max-width: 768px) {
      padding: 0 16px;
    }

    &:last-child {
      padding-right: 0;
    }
  }

  img {
    width: 76px;
    height: 76px;
    border-radius: 50%;
    object-fit: cover;
  }

  h3 {
    font-size: 1rem;
    color: var(--heading);
    line-height: 24px;
    margin-bottom: 8px;
  }
</style>
