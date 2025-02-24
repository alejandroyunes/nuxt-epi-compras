<script setup lang="ts">
import RealEstate from '~/components/organisms/ad-post/real-estate.vue'
import SafetyTips from '~/components/organisms/safety-tips.vue'

const title = 'Compra y venta de inmuebles'
const description = 'Compra y venta de inmuebles en EpiCompras Gratis'

useSeoMeta({
  title: title,
  description: description,
  ogSiteName: 'https://epicompras.com/publicar/inmuebles',
  ogTitle: title,
  ogDescription: description,
  ogImage: '/open-graph.webp',
  ogUrl: 'https://epicompras.com/publicar/inmuebles',
  ogLocale: 'es_CO',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/open-graph.webp',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <RealEstate />
  <SafetyTips />
</template>
