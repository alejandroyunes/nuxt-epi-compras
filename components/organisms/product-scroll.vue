<script setup lang="ts">
import { ref } from 'vue'
import type { ReviewGrid } from "~/types/review-grid"

const isLoading = ref(true)

const { reviews } = defineProps<{
  reviews: ReviewGrid[],
  marginTop?: boolean
}>()

</script>

<template>
  <!-- <ProductScrollSkeleton v-if="isLoading" /> -->

  <section v-if="isLoading" class="product-scroll">
    <ul>
      <li v-for="review in reviews" :key="review.id">
        <div class="container">

          <div class="content">
            <NuxtImg :src="review.image" :alt="review.name" />

            <div class="item">
              <div class="title">
                <h3>{{ review.name }}</h3>
              </div>
              
              <div>
                <p class="price">Price: {{ review.price }}</p>
                <p>Last Updated: {{ review.updatedDate }}</p>
                <div class="rating">
                  <span> ⭐ {{ review.rating }} Stars</span>
                  <span> ❤️ {{ review.reviewCount.toLocaleString() }} reviews</span>
                </div>
                <NuxtLink :to="`${review.path}`" class="button">
                  Read Review
                </NuxtLink>
              </div>

            </div>
          </div>

        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.product-scroll {
  width: auto;
  margin: 0 auto;
  max-width: var(--large-width);
  padding-top: 0;

  ul {
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
    list-style: none;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      height: .8rem;
      display: block;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--primary);
      border-radius: 10px;
    }

    li {
      display: flex;
      align-items: stretch;

      .container {
        scroll-snap-align: start;
      }
      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%; 
        margin-left: 5px;
        margin-right: 16px;
        position: relative;
        list-style-type: none;
        box-shadow: var(--shadow);
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        background-color: var(--background);

        img {
          width: 300px;
          height: auto;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }

        .item {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          padding: 16px;

          h3 {
            font-size: 1.25rem;
            color: var(--heading);
            margin-bottom: 8px;
            margin-right: 8px;
          }
          p {
            font-size: 1rem;
            color: var(--color-text);
            margin-bottom: 8px;
          }
          .title {
            display: flex;
            justify-content: space-between;
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
  }
}
</style>
