<script setup lang="ts">

type Props = {
  view: string
  title: string
  border: boolean
}

const { view, title, border } = defineProps<Props>()

</script>

<template>
  <section class="title-inner" :class="{ 'border': border }">
    <div>
      <h2>{{ title }}</h2>
    </div>
    <div>
      <p>{{ view }}</p>
    </div>
  </section>
</template>

<style lang="scss">
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

.border {
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 10px;
}
</style>