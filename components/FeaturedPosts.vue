<script setup lang="ts">
import { computed } from 'vue';
import BlogCard from '~/components/BlogCard.vue';
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Top 10 Best Water Flossers of 2025",
    excerpt: "Discover our expert reviews of the best water flossers to elevate your oral hygiene in 2025.",
    content: `
      Water flossers have revolutionized oral hygiene, providing a more effective and convenient alternative to traditional flossing. 
      In this blog, we highlight the top 10 water flossers of 2025, detailing their features, benefits, and why they stand out.
    `,
    image: "https://example.com/images/top-10-water-flossers-2025.jpg",
    date: "2025-01-10",
    author: "Jane Doe"
  },
  {
    id: 2,
    title: "The Benefits of Using a Water Flosser",
    excerpt: "Learn why water flossers are essential for maintaining excellent dental health.",
    content: `
      Are water flossers worth it? Absolutely! This blog explains the key benefits of using water flossers, 
      including improved gum health, ease of use, and why they’re highly recommended by dentists.
    `,
    image: "https://example.com/images/benefits-of-water-flossers.jpg",
    date: "2025-01-07",
    author: "John Smith"
  },
  {
    id: 3,
    title: "Water Flossers vs. String Floss: What’s the Difference?",
    excerpt: "A comprehensive comparison of water flossers and traditional string floss to help you choose the best option.",
    content: `
      Flossing is critical for oral health, but which method is better? This article breaks down the differences between 
      water flossers and string floss, exploring their pros, cons, and which one suits different dental needs.
    `,
    image: "https://example.com/images/water-flossers-vs-string-floss.jpg",
    date: "2025-01-05",
    author: "Emily Clark"
  },
  {
    id: 4,
    title: "How to Choose the Right Water Flosser for You",
    excerpt: "Find the perfect water flosser for your dental needs with our expert tips and recommendations.",
    content: `
      With so many water flossers on the market, picking the right one can be overwhelming. 
      In this guide, we’ll share tips on what to look for, key features to consider, and how to make an informed decision.
    `,
    image: "https://example.com/images/choose-right-water-flosser.jpg",
    date: "2025-01-03",
    author: "Sarah Johnson"
  },
  {
    id: 5,
    title: "The Science Behind Water Flossers",
    excerpt: "Understand how water flossers work and the technology that makes them effective.",
    content: `
      Water flossers use a stream of pulsating water to clean between your teeth and gums. 
      This blog dives into the science behind how they work and why they’re so effective at removing plaque and debris.
    `,
    image: "https://example.com/images/science-behind-water-flossers.jpg",
    date: "2025-01-01",
    author: "Dr. Alan Brown"
  }
];

</script>

<template>
  <section class="featured-posts">
    <h2 class="featured-posts__title">Latest Articles</h2>
    <div class="featured-posts__grid">
      <BlogCard v-for="post in blogPosts" :key="post.id" :post="post" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.featured-posts {
  padding: 4rem 2rem;
  background: white;

  &__title {
    text-align: center;
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 3rem;
    font-weight: 700;
  }

  &__grid {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 0 1rem;
  }
}
</style>