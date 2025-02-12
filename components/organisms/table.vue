<script setup lang="ts">
import type { ProductDetails } from '~/types/product-details';

const { info } = defineProps<{
  info?: ProductDetails['comparison']
}>()

</script>

<template>
  <section class="comparison-section" :id="info?.id">
    <div class="container">
      <h2>{{ info?.title }}</h2>
      <p class="section-intro">{{ info?.description }}</p>

      <div class="comparison-table-wrapper">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Models</th>
              <th v-for="model in info?.models" :key="model.id">{{ model.model }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Image</td>
              <td v-for="model in info?.models" :key="model.model">
                <NuxtImg :src="model.image" :alt="model.alt" format="webp" loading="lazy" sizes="xs:100vw"  />
              </td>
            </tr>
            <tr>
              <td>Prime</td>
              <td v-for="model in info?.models" :key="model.id">
                <span v-if="model.prime" class="prime-badge">✓</span>
              </td>
            </tr>
            <tr>
              <td>Dimensions</td>
              <td v-for="model in info?.models" :key="model.id">{{ model.dimensions }}</td>
            </tr>
            <tr>
              <td>Tips</td>
              <td v-for="model in info?.models" :key="model.id">{{ model.tips }}</td>
            </tr>
            <tr>
              <td>Capacity</td>
              <td v-for="model in info?.models" :key="model.id">{{ model.capacity }}</td>
            </tr>
            <tr>
              <td>Highlight</td>
              <td v-for="model in info?.models" :key="model.id">{{ model.highlight }}</td>
            </tr>
            <tr>
              <td>Problem</td>
              <td v-for="model in info?.models" :key="model.id">{{ model.problem }}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td v-for="model in info?.models" :key="model.id">
                <span class="price-tag">{{ model.price }}</span>
              </td>
            </tr>
            <tr>
              <td>Satisfaction</td>
              <td v-for="model in info?.models" :key="model.id">
                <div class="satisfaction">
                  <span class="rating">⭐ {{ model.satisfaction }}</span>
                </div>
              </td>
            </tr>
            <tr>
              <td>View</td>
              <td v-for="model in info?.models" :key="model.id">
                <NuxtLink :to="`/${model.path}`" class="view-price-btn">More</NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.comparison-section {
  padding: 5rem 0 0;
  background: var(--background);
  scroll-margin-top: 40px;

  h2 {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 1rem;
    text-align: center;
  }

  .section-intro {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 3rem;
    color: var(--text-color);
    font-size: 1.1rem;
  }

  .comparison-table-wrapper {
    overflow-x: auto;
    margin: 2rem auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    max-width: var(--max-width);

  }

  .comparison-table {
    width: 100%;
    border-collapse: collapse;
    background: var(--background);

    th,
    td {
      padding: 1rem;
      text-align: center;
      border: 1px solid var(--background-opposite);
    }

    th {
      background: var(--primary);
      color: var(--white);
      font-weight: 600;
      white-space: nowrap;
    }

    td:first-child {
      background: var(--background);
      font-weight: 600;
      text-align: left;
    }

    img {
      max-width: 200px;
      height: auto;
      margin: 0 auto;
      border-radius: 8px;
    }

    .prime-badge {
      color: var(--primary);
      font-size: 1.2rem;
      font-weight: bold;
    }

    .price-tag {
      display: inline-block;
      padding: 0.5rem 1rem;
      background: var(--background-dark);
      border-radius: 2rem;
      font-weight: 600;
      color: var(--white);
    }

    .satisfaction {
      .rating {
        font-weight: 600;
        color: var(--primary);
      }
    }

    .view-price-btn {
      display: inline-block;
      padding: 0.5rem 1rem;
      background: var(--primary);
      color: var(--white);
      text-decoration: none;
      border-radius: 0.5rem;
      transition: background-color 0.3s ease;
      cursor: pointer;

      &:hover {
        background: var(--secondary);
      }
    }
  }

  @media (max-width: 768px) {
    .comparison-table {
      font-size: 0.9rem;

      th,
      td {
        padding: 0.75rem;
      }

      img {
        max-width: 100px;
      }
    }
  }
}
</style>
