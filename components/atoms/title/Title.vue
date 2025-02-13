<script setup lang="ts">

type Props = {
  view: string
  title: string
}

const { view, title } = defineProps<Props>()

</script>

<template>
  <div class="title-inner">
    <div>
      <h2>{{ title }}</h2>
    </div>
    <div>
      <p>{{ view }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-heading);
  margin-top: 24px;

  p {
    cursor: pointer;
  }

  p:hover {
    text-decoration: underline;
    color: var(--color-text);
  }
}

</style>