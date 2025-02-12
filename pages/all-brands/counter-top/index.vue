<script setup lang="ts">
import TitleDescription from "~/components/atoms/title-description/index.vue"
import Filter from '~/components/organisms/filter.vue'
import Hero from '~/components/organisms/hero.vue'
import ReviewsGrid from '~/components/organisms/review-grid.vue'
import TypeSection from '~/components/organisms/types.vue'
import { getAllCounter } from '~/composables/all-brands/getAllCounter'
import type { TitleInfo } from "~/types/title-info"


const { allCounterReview, filterByPrice } = getAllCounter()


const title = 'Best Counter top Water Flossers from All Brands for Healthy Teeth & Gums in 2025'
const description = 'Find the best counter top water flossers from all brands to maintain optimal oral hygiene. Explore our expert reviews and comparisons of the top dental irrigators for healthier teeth and gums.';

useSeoMeta({
  title: title,
  description: description,
  ogSiteName: 'https://dental-irrigator.net/',
  ogTitle: title,
  ogDescription: description,
  ogImage: '/open-graph.webp',
  ogUrl: 'https://dental-irrigator.net/all-brands/counter-top',
  ogLocale: 'en_US',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/open-graph.webp',
  twitterCard: 'summary_large_image',
})

const heroData = {
  titleH2: "Discover the Top Choices for",
  title: "Best Counter tops Water Flossers of 2025 from All Brands",
  subtitle: "These are the best counter tops water flossers of 2025 from all brands for their price, durability and overall feeling of users.",
  buttonText: "Browse Best Countertops",
  cta: ""
}

const typeTitle: TitleInfo = {
  title: 'What Type of Dental Irrigator to Buy?',
  description: 'The best irrigator is the one that fits your needs. To meet different demands, manufacturers have created two main types of irrigators: countertop (powerful), cordless (more convenient for travel and portability).',
  subtext: 'Check out our reviews and comparisons of the top best water flossers for healthier teeth and gums.',
}

const bestPortableTypes = [
  {
    title: 'Best Portable Water Flossers',
    description: 'Portable dental irrigators are the portable choice for oral hygiene on the go. Unlike countertop models, their compact and lightweight design makes them easy to carry. They often operate on batteries and have smaller water reservoirs, suitable for temporary use away from home. Although they may have fewer pressure settings, their convenience and adaptability make them essential for those who frequently travel.',
    image: 'https://res.cloudinary.com/dcpdkock3/image/upload/v1734236670/irrigators/01%20-%20types/wireless_tqxtyc.webp',
    link: '/best/portable'
  },
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
  <ReviewsGrid :reviews="allCounterReview" />
  <TitleDescription :info="typeTitle" />
  <TypeSection :types="bestPortableTypes" />
</template>

<style scoped></style>