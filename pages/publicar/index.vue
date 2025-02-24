<script setup lang="ts">
import AdPost from '~/components/organisms/ad-post/ad-posts.vue'
import SafetyTips from '~/components/organisms/safety-tips.vue'

const title = 'Publica totalmente gratis en EpiCompras'
const description = 'EpiCompras te ayuda a publicar tus productos de manera gratuita'

useSeoMeta({
  title: title,
  description: description,
  ogSiteName: 'https://epicompras.com/publicar',
  ogTitle: title,
  ogDescription: description,
  ogImage: '/open-graph.webp',
  ogUrl: 'https://epicompras.com/publicar',
  ogLocale: 'es_CO',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/open-graph.webp',
  twitterCard: 'summary_large_image',
})

</script>

<template>
  <AdPost />
  <SafetyTips />
</template>
