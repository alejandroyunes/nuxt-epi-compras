<script setup lang="ts">
const { title } = defineProps<{ title: String }>()

</script>

<template>
  <section class="title-post">
    <h1>{{ title }}</h1>
  </section>
</template>

<style lang="scss" scoped>
.title-post {
  font-size: 24px;
  margin-top: 44px;
  text-align: center;
  color: var(--color-heading);

  @media (max-width: 1024px) {
    margin-top: 24px;
  }
}
</style>