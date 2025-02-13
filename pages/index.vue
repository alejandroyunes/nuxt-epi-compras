<script setup lang="ts">
import Categories from '~/components/organisms/categories.vue'

import ThreeCardSiteInfo from '~/components/organisms/card/3-card-site-info/ThreeCardSiteInfo.vue'
import RecentAds from '~/components/organisms/recent-ads.vue'

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
  <Categories />
  <RecentAds />
  <ThreeCardSiteInfo />
</template>