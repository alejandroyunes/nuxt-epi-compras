<script setup lang="ts">

type Props = {
  view: string
  title: string
}

const { view, title } = defineProps<Props>()

</script>

<template>
  <div class="title">
    <div>
      <h2>{{ title }}</h2>
    </div>
    <div>
      <p>{{ view }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-heading);
  margin: 24px auto 0; 
  max-width: var(--max-width);
}

</style>