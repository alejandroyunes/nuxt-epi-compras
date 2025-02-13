<script setup lang="ts">
import RealEstate from '~/components/organisms/ad-post/real-estate.vue'

</script>

<template>
  <section class="real-estate-post-outer">
    <div class="real-estate-post-inner">
      <RealEstate />
    </div>
  </section>
</template>


<style lang="scss">
.real-estate-post-outer {
  width: 100%;
}

.real-estate-post-inner {
  max-width: var(--tablet-width);
  margin: 0 auto;
  padding: 0 20px;
}
</style>