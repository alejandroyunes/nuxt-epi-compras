<script setup lang="ts">
import AdPost from '~/components/organisms/ad-post/ad-posts.vue';

const title = 'Expert advice and products to improve your oral health'
const description = 'Improve your oral health with our: ✓ Detailed user guides ✓ Expert advice ✓ Comparisons ✓ Reviews ✓ Promotions'

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
  <AdPost />
</template>
