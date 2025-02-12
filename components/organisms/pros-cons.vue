<script setup lang="ts">
import type { ProductDetails } from '~/types/product-details'
import RightArrowSvg from '~/components/icons/arrows/RightArrowSvg.vue';

const { info } = defineProps<{
  info?: ProductDetails['proAndCons']
}>()

</script>

<template>

  <section class="pros-cons" :id="info?.id">

    <div class="header">
      <h2>{{ info?.title }}</h2>
      <p>{{ info?.description }}</p>
    </div>

    <div class="container">
      <div class="column">
        <h3>Pros</h3>
        <ul>
          <li v-for="(pro, index) in info?.pros" :key="index">
            <span class="icon">✓</span>
            {{ pro.title }}
          </li>
        </ul>
      </div>

      <div class="column cons">
        <h3>Cons</h3>
        <ul>
          <li v-for="(con, index) in info?.cons" :key="index">
            <span class="icon">✗</span>
            {{ con.title }}
          </li>
        </ul>
      </div>
    </div>

    <div class="cta">
      <NuxtLink :to="info?.buyLink" class="button">
        {{ info?.cta }}
        <RightArrowSvg />
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped lang="scss">
.pros-cons {
  padding: 4rem 0 0;
  scroll-margin-top: 40px;

  .header {
    max-width: 800px;
    margin: 0 auto 3rem;
    text-align: center;

    h2 {
      font-size: 2.5rem;
      color: var(--primary);
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.25rem;
      color: var(--text);
      line-height: 1.8;
    }
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }

    .column {
      background: var(--background-base);
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      h3 {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
        text-align: center;
        color: var(--text);
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.25rem;
          line-height: 1.6;
          color: var(--heading);
          font-size: 1.2rem;

          .icon {
            flex-shrink: 0;
            font-size: 1.2rem;
            margin-top: 0.2rem;
          }
        }
      }

      &.pros .icon {
        color: #10b981;
      }

      &.cons .icon {
        color: #ef4444;
      }
    }

  }

  .cta {
    text-align: center;
    margin-top: 3rem;

    .button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--primary);
      color: white;
      padding: 1rem 2rem;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.2rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px rgba(52, 152, 219, 0.2);

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 12px rgba(52, 152, 219, 0.3);

        svg {
          transform: translateX(4px);
        }
      }

      svg {
        transition: transform 0.3s ease;
      }
    }
  }
}
</style>
