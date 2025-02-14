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
  font-size: 1.8rem;
  margin-top: 40px;
  text-align: center;
  color: var(--heading);

  @media (max-width: 1024px) {
    margin-top: 24px;
  }
}
</style>