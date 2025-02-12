<script setup lang="ts">
import { getBest } from '../composables/affordable/getBest'
import { getBestCounter } from '../composables/affordable/getBestCounter'
import { getBestPortable } from '../composables/affordable/getBestPortable'

import type { TitleInfo } from "~/types/title-info"

import TitleDescription from "~/components/atoms/title-description/index.vue"
import QuestionsAndAnswers from '~/components/organisms-raw/questions.vue'
import Hero from '~/components/organisms/hero.vue'
import ProductScroll from '~/components/organisms/product-scroll.vue'
import ReviewsGrid from '~/components/organisms/review-grid.vue'

const title = 'Expert advice and products to improve your oral health'
const description = 'Improve your oral health with our: ✓ Detailed user guides ✓ Expert advice ✓ Comparisons ✓ Reviews ✓ Promotions'

useSeoMeta({
  title: title,
  description: description,
  ogSiteName: 'https://dental-irrigator.net/',
  ogTitle: title,
  ogDescription: description,
  ogImage: '/open-graph.webp',
  ogUrl: 'https://dental-irrigator.net/',
  ogLocale: 'en_US',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/open-graph.webp',
  twitterCard: 'summary_large_image',
})

const { bestReview } = getBest()
const { bestPortableAffortableReview } = getBestPortable()
const { bestCounterAffortableReview } = getBestCounter()

const heroData = {
  titleH2: "Discover the Top Picks for",
  title: "Best Affordable Water Flossers of 2025",
  subtitle: "Say goodbye to plaque and hello to a healthier smile! We've reviewed the top water flossers of 2025 based on performance, user reviews, and expert recommendations. Find the perfect water flosser for your dental care needs today!",
  buttonText: "Browse Best Water Flossers",
  cta: ""
}

const bestWirelessReviewsTitle: TitleInfo = {
  title: "Affordable Wireless Water Flossers",
  description: "Upgrade your smile game without breaking the bank! Dive into the coolest portable and affordable oral irrigators on Amazon. We've rounded up the best brands for easy, breezy dental care.",
  subtext: "Click on view more to read our review of the top-rated wireless water flossers of 2025.",
}

const bestCounterReviewsTitle: TitleInfo = {
  title: 'Affordable Counter Top Dental Irrigators',
  description: 'Explore the best budget-friendly counter top oral irrigators that provide superior dental care with high water pulsation, multiple pressure settings, and various tips for different needs.',
  subtext: 'Achieve effective, professional-level cleaning without the high cost. Perfect for families and individuals looking for a reliable and affordable oral care solution.',
}

</script>

<template>
  <Hero :heroData="heroData" />
  <ProductScroll :reviews="bestReview" />

  <TitleDescription :info="bestWirelessReviewsTitle" />
  <ReviewsGrid :reviews="bestPortableAffortableReview" />

  <TitleDescription :info="bestCounterReviewsTitle" />
  <ReviewsGrid :reviews="bestCounterAffortableReview" />

  <QuestionsAndAnswers />
</template>