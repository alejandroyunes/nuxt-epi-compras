<script setup lang="ts">
import AdPost from '~/components/organisms/ad-post/AdPost.vue'
</script>

<template>
  <section class="ad-post-inner">
    <AdPost />
  </section>
</template>


<style lang="scss">
.ad-post-inner {
  max-width: var(--tablet-width);
  margin: 0 auto;
}
</style>