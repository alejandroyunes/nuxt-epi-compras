<script setup lang="ts">
import type { ProductDetails } from '~/types/product-details';
import Galleria from '../organisms/galleria.vue';

const { info } = defineProps<{
  info?: ProductDetails['info']
}>()

console.log('info: ',info?.rating.reviews)

</script>

<template>
  <div class="card-details">
    <div class="card-image">
      <Galleria :images="info?.images || [{ url: '', thumbnail: '' }]" />
    </div>

    <div class="card-info">
      <h1>{{ info?.title }}</h1>
      <p>
        {{ info?.description }}
      </p>

      <div class="price-and-date">
        <p class="price">{{ info?.price }}</p>
        <p class="date">last updated: <strong>{{ info?.updatedDate }}</strong> - Price may vary</p>
      </div>

      <div class="rating">
        <span> ⭐ {{ info?.rating.stars }} Stars</span>
        <span> ❤️ {{ info?.rating.reviews.toLocaleString() }} reviews</span>
      </div>

      <div class="characteristics">
        <h4>Characteristics</h4>
        <ul>
          <li v-for="(char, index) in info?.characteristics" :key="index">
            {{ char }}
          </li>
        </ul>
      </div>

      <NuxtLink :to="info?.buyLink" class="buy-button" target="_blank">👉 {{ info?.cta }}</NuxtLink>
    </div>
  </div>

</template>

<style lang="scss" scoped>

.card-details {
  display: grid;
  grid-template-columns: .8fr 1fr;
  gap: 4rem;
  align-items: center;
  background: var(--background);
  padding: 8rem 0 5rem;
  max-width: var(--max-width);
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    width: 100%;
  }

  .card-image {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .card-info {
    h1 {
      font-size: 2.5rem;
      color: var(--primary);
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: .2rem;
      line-height: 1.7;
      font-size: 1.1rem;
    }

    .price-and-date {
      display: flex;
      align-items: center;
      gap: .5rem;

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0;
      }

      .price {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--primary);
      }

      .date {
        color: var(--text);
        font-size: 1rem;

        strong {
          font-weight: bold;
        }
      }
    }

    .disclaimer {
        display: flex;
        color: var(--text);
        font-size: 0.9rem;
        font-weight: 500;
      }

    .rating {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: .3rem 0 .1rem;

      span {
        color: var(--text-color);
        font-weight: bold;
        font-size: 1rem;
      }
    }

    .characteristics {
      margin: .5rem 0 2rem;

      h4 {
        font-size: 1.25rem;
        color: var(--secondary-color);
        margin-bottom: 1rem;
      }

      ul {
        list-style: none;
        padding-left: 24px;

        li {
          margin-bottom: 0.75rem;
          padding-left: 1.5rem;
          position: relative;

          &:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: var(--primary);
            font-weight: bold;
          }
        }
      }
    }

    .buy-button {
      display: inline-flex;
      background: var(--primary);
      color: white;
      padding: 1rem 2rem;
      border-radius: 0.5rem;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.3rem;
      transition: all 0.3s ease;

      &:hover {
        background: var(--secondary);
        transform: translateY(-2px);
      }
    }
  }
}
</style>