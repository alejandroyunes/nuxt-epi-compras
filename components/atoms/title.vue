<script setup lang="ts">

type Props = {
  view: string
  title: string
}

const { view, title } = defineProps<Props>()

</script>

<template>
  <div class="title">
    <h2>{{ title }}</h2>
    <p>{{ view }}</p>
  </div>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto 0;
  max-width: var(--max-width);

  h2 {
    font-size: 1.3rem;
    color: var(--heading);
    padding-left: .6rem;
  }

  p {
    font-size: 1.125rem;
  }

  @media (max-width: 1292px) {
    margin: .6rem .6rem 0;

    h2 {
      padding-left: 0;
    }
  }

  @media (max-width: 1024px) {
    margin: .3rem .6rem 0;
  }
}
</style>