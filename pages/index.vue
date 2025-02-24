<script setup lang="ts">

import Categories from '~/components/organisms/categories.vue'
import ProductCard from '~/components/organisms/product-card.vue'
import SafetyTips from '~/components/organisms/safety-tips.vue'

const title = 'Publica totalmente gratis en EpiCompras'
const description = 'Compra y venta de productos'

useSeoMeta({
  title: title,
  description: description,
  ogSiteName: 'https://epicompras.com',
  ogTitle: title,
  ogDescription: description,
  ogImage: '/open-graph.webp',
  ogUrl: 'https://epicompras.com',
  ogLocale: 'es_CO',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/open-graph.webp',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <Categories />
  <ProductCard />
  <SafetyTips />
</template>