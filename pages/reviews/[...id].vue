<script setup lang="ts">
import { useRoute } from 'vue-router'
import Title from '~/components/atoms/title-description/index.vue'
import Accordion from '~/components/organisms/accordion.vue'
import Features from '~/components/organisms/features.vue'
import ProductCard from '~/components/organisms/product-card.vue'
import ProsCons from '~/components/organisms/pros-cons.vue'
import TableComparison from '~/components/organisms/table.vue'
import Video from '~/components/organisms/video.vue'
import { getProductDetails } from '~/composables/getProductDetails'

const route = useRoute()

const fileRoute = route.params.id

const { product, loading, error } = getProductDetails(fileRoute)

watch([product, loading, error], ([newProduct, newLoading, newError]) => {

  return {
    product: newProduct,
    loading: newLoading,
    error: newError
  }
})

if (loading.value) {
  console.log('loading')
}

if (error.value) {
  console.log('error')
}

if (product.value) {
  console.log('product')
}

</script>

<template>
  <section class="product-section">
    <ProductCard :info="product?.info" />
    <Accordion :info="product?.tableOfContent" />
    <Title :info="product?.title" />
    <Video :videoUrl="product?.info.video" />
    <Video v-if="product?.info.video2" :videoUrl="product?.info.video2" />
    <TableComparison :info="product?.comparison" />
    <Features :info="product?.features" />
    <ProsCons :info="product?.proAndCons" />
  </section>
</template>
