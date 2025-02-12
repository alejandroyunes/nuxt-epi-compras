<script setup lang="ts">

import TitleDescription from "~/components/atoms/title-description/index.vue"
import Filter from '~/components/organisms/filter.vue'
import Hero from '~/components/organisms/hero.vue'
import ReviewsGrid from '~/components/organisms/review-grid.vue'
import TypeSection from '~/components/organisms/types.vue'
import type { TitleInfo } from "~/types/title-info"

import { getBestCounter } from '~/composables/affordable/getBestCounter'

const { bestCounterAffortableReview, filterByPrice } = getBestCounter()

const title = 'Top 6 Best Affordable Counter top Water Flossers for Healthy Teeth & Gums in 2025'
const description = 'Find the best affordable counter top water flossers to maintain optimal oral hygiene. Explore our expert reviews and comparisons of the top dental irrigators for healthier teeth and gums.';

useSeoMeta({
  title: title,
  description: description,
  ogSiteName: 'https://dental-irrigator.net/',
  ogTitle: title,
  ogDescription: description,
  ogImage: '/open-graph.webp',
  ogUrl: 'https://dental-irrigator.net/affordable/counter-top',
  ogLocale: 'en_US',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/open-graph.webp',
  twitterCard: 'summary_large_image',
})

const heroData = {
  titleH2: "Discover the Top Choices for",
  title: "Best Affordable Counter Tops Water Flossers of 2025",
  subtitle: "Upgrade your home with stunning counter tops dental irrigators! We've reviewed the top best affordable counter tops of 2025 based on durability, style, and customer feedback. Find the perfect one to enhance your oral health today!",
  buttonText: "Browse Best Countertops",
  cta: ""
}

const typeTitle: TitleInfo = {
  title: 'What Type of Dental Irrigator to Buy?',
  description: 'The best irrigator is the one that fits your needs. To meet different demands, manufacturers have created two main types of irrigators: countertop (powerful), cordless (more convenient for travel and portability).',
  subtext: 'Check out our reviews and comparisons of the top affordable water flossers for healthier teeth and gums.',
}

const bestAffordableTypes = [
  {
    title: 'Best Affordable Water Flossers',
    description: 'Best affordable dental irrigators are the ideal solution for those looking for a reliable and efficient way to maintain healthy teeth and gums. These irrigators are known for their affordability, durability, and user-friendly design, making them a popular choice for those seeking a budget-friendly way to improve oral hygiene.',
    image: 'https://res.cloudinary.com/dcpdkock3/image/upload/v1737658733/irrigators/01%20-%20types/best-all_nscjud.webp',
    link: '/affordable/best'
  },
  {
    title: 'Best Affordable Portable Water Flossers',
    description: 'Portable dental irrigators are the portable choice for oral hygiene on the go. Unlike countertop models, their compact and lightweight design makes them easy to carry. They often operate on batteries and have smaller water reservoirs, suitable for temporary use away from home. Although they may have fewer pressure settings, their convenience and adaptability make them essential for those who frequently travel.',
    image: 'https://res.cloudinary.com/dcpdkock3/image/upload/v1734236670/irrigators/01%20-%20types/wireless_tqxtyc.webp',
    link: '/affordable/portable'
  },
]

</script>

<template>
  <Hero :heroData="heroData" />
  <Filter :filterByPrice="filterByPrice" />
  <ReviewsGrid :reviews="bestCounterAffortableReview" />
  <TitleDescription :info="typeTitle" />
  <TypeSection :types="bestAffordableTypes" />
</template>

<style scoped></style>