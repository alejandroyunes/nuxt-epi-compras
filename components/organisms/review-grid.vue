<script setup lang="ts">
import type { ReviewGrid } from "~/types/review-grid"

const { reviews } = defineProps<{
  reviews: ReviewGrid[],
}>()

</script>

<template>
  <section class="irrigator-grid">
    <ul>
      <div v-for="review in reviews" :key="review.id" class="card">
        <NuxtImg :src="review.image" :alt="review.name" class="image" />
        <div class="content">
          <div>
            <h3>{{ review.name }}</h3>
          </div>

          <div>
            <p class="price">Price: {{ review.price }}</p>
            <p>Last Updated: {{ review.updatedDate }}</p>
            <div class="rating">
              <span> ⭐ {{ review.rating }} Stars</span>
              <span> ❤️ {{ review.reviewCount.toLocaleString() }} reviews</span>
            </div>
            <NuxtLink :to="`/${review.path}`" class="button">
              Read Review
            </NuxtLink>
          </div>
        </div>
      </div>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.irrigator-grid {
  max-width: 1200px;
  margin: 0 auto;

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    padding: 0;

    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 12px;
      background-color: var(--background-soft);
      box-shadow: var(--shadow-card);

      .image {
        object-fit: cover;
        transition: transform 0.3s ease;
        padding: 20px;
      }

      &:hover .image {
        transform: scale(1.05);
      }

      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1.5rem;
        height: 100%;

        @media (max-width: 768px) {
          justify-content: center;
          padding: 0 1.5rem 1.5rem;
        }

        h3 {
          font-size: 1.25rem;
          color: var(--text-color);
          margin-bottom: 0.5rem;
        }
      }

      .price {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--primary);
        margin-bottom: 0.5rem;
      }

      .rating {
        display: flex;
        justify-content: space-between;
        gap: 0.5rem;
        margin: .5rem 0 .8rem;

        span {
          color: var(--text-color);
          font-weight: bold;
          font-size: 1rem;
        }
      }

      .button {
        display: inline-block;
        width: 100%;
        padding: 0.75rem 1.5rem;
        background: var(--primary);
        color: white;
        text-align: center;
        text-decoration: none;
        border-radius: 6px;
        transition: background-color 0.3s ease;

        &:hover {
          background: var(--primary);
        }
      }

    }
  }
}
</style>
