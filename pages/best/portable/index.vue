<script setup lang="ts">
import TitleDescription from "~/components/atoms/title-description/index.vue"
import Filter from '~/components/organisms/filter.vue'
import Hero from '~/components/organisms/hero.vue'
import ReviewsGrid from '~/components/organisms/review-grid.vue'
import TypeSection from '~/components/organisms/types.vue'

import { getBestPortable } from '~/composables/best/getBestPortable'
import type { TitleInfo } from "~/types/title-info"

const { bestPortableReview, filterByPrice } = getBestPortable()

const title = 'Top 6 Best Portable Water Flossers for Healthy Teeth & Gums in 2025';
const description = 'Discover the best portable / wireless water flossers to maintain optimal oral hygiene. Explore our expert reviews and comparisons of the top dental irrigators for healthier teeth and gums.';

useSeoMeta({
  title: title,
  description: description,
  ogSiteName: 'https://dental-irrigator.net/',
  ogTitle: title,
  ogDescription: description,
  ogImage: '/open-graph.webp',
  ogUrl: 'https://dental-irrigator.net/best/counter-top',
  ogLocale: 'en_US',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/open-graph.webp',
  twitterCard: 'summary_large_image',
})

const heroData = {
  titleH2: "Discover the Top Choices for",
  title: "Best Portable / Wireless Water Flossers of 2025",
  subtitle: "These are the best portable and wireless water flossers of 2025 for their price, value, portability and overall feeling of the users.",
  buttonText: "Browse Best Countertops",
  cta: ""
}

const typeTitle: TitleInfo = {
  title: 'What Type of Dental Irrigator to Buy?',
  description: 'The best irrigator is the one that fits your needs. To meet different demands, manufacturers have created two main types of irrigators: countertop (powerful), cordless (more convenient for travel and portability).',
  subtext: 'Check out our reviews and comparisons of the top best portable and wireless water flossers for healthier teeth and gums.',
}

const bestCounterTypes = [
  {
    title: 'Best Counter Tops Water Flossers',
    description: 'Counter top dental irrigators are characterized by their stationary design and larger water tank capacity. Unlike portable models, they offer multiple pressure settings and interchangeable nozzles, allowing for more precise and customized cleaning based on individual needs. Their size and features make them ideal for intensive and personalized use at home, providing comprehensive and professional oral hygiene.',
    image: 'https://res.cloudinary.com/dcpdkock3/image/upload/v1734236670/irrigators/01%20-%20types/counter-top_b8n4z9.webp',
    link: '/best/counter-top'
  },
]

</script>

<template>
  <Hero :heroData="heroData" />
  <Filter :filterByPrice="filterByPrice" />
  <ReviewsGrid :reviews="bestPortableReview" />
  <TitleDescription :info="typeTitle" />
  <TypeSection :types="bestCounterTypes" />
</template>

<style scoped></style>