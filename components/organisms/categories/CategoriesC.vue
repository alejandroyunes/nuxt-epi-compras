<script setup lang="ts">
import TitleC from '~/components/atoms/title/TitleC.vue'
import CategoriesList from '~/components/organisms/categories/CategoriesList.vue'
</script>

<template>
  <section>
    <TitleC :view="'ver más'" :title="'Categorías'" :border="true" />
    <CategoriesList />
  </section>
</template>
