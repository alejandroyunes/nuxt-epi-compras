<script lang="ts" setup>

type TitleDescription = {
  id?: string
  title?: string
  description?: string
  subtext?: string
  marginTop?: boolean
}

const { info } = defineProps<{
  info?: TitleDescription
  marginTop?: boolean
}>()

</script>

<template>
  <div class="title-description" :id="info?.id">
    <h2 class="title" :class="{ 'extra-top-space': marginTop }">{{ info?.title }}</h2>
    <p class="description">{{ info?.description }}</p>
    <p class="text">{{ info?.subtext }}</p>
  </div>
</template>



<style lang="css" scoped>
.title-description {
  padding: 4rem 1.2rem;
  margin: 0 auto;
  max-width: var(--tablet-width);
  text-align: center;
  scroll-margin-top: 40px;

  .title {
    font-size: 2.5rem;
    color: var(--heading);
    margin-bottom: 1.5rem;
    background: var(--background-text);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .description {
    font-size: 1.25rem;
    color: var(--text);
    margin: 0 auto;
    line-height: 1.8;
    margin-bottom: 1rem;
    max-width: var(--mobile-width);
  }

  .text {
    font-size: 1.25rem;
    color: var(--text);
    font-style: italic;
  }

  .extra-top-space {
    padding-top: 40px;
  }
}
</style>