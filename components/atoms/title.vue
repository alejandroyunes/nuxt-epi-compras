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
  margin: 1rem auto 0;
  max-width: var(--max-width);

  p {
    font-size: 1.125rem;
  }

  @media (max-width: 1290px) {
    margin: .6rem .6rem 0;
  }

  @media (max-width: 1024px) {
    margin: 0rem .6rem 0;
  }
}
</style>