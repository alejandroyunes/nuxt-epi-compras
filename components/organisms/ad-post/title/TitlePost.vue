<script setup lang="ts">
import './title-post.scss'
const { title } = defineProps<{ title: String }>()

</script>

<template>
  <section class="title-post">
    <h1>{{ title }}</h1>
  </section>
</template>