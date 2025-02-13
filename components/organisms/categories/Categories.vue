<script setup lang="ts">
import Title from '~/components/atoms/title/Title.vue'
import CategoriesList from '~/components/organisms/categories/CategoriesList.vue'
</script>

<template>
  <section>
    <Title :view="'ver más'" :title="'Categorías'" />
    <CategoriesList />
  </section>
</template>
