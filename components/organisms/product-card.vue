<script setup lang="ts">
import { ref, nextTick } from 'vue'
import Title from '~/components/atoms/title/Title.vue'
import ProductCardSkeleton from '~/components/atoms/loaders/skeleton/product-card.vue'
import TitleSkeleton from '~/components/atoms/loaders/skeleton/title.vue'
import ProductImage from '~/components/atoms/product-image.vue'

interface AdType {
  id: string
  title: string
  description: string
  image: string
  price: number
  location: string
  date: string
  url: string
}

const ads = ref<AdType[]>([
  { id: '1', title: 'Car for Sale', description: 'Low mileage and excellent condition.', image: '/ads/carro.jpg', price: 100, location: 'New York, NY', date: '2021-01-01', url: '' },
  { id: '2', title: 'Spacious House', description: 'Beautiful house for rent.', image: '/ads/casa.jpg', price: 200, location: 'Los Angeles, CA', date: '2021-01-02', url: '' },
  { id: '3', title: 'Kitchen Stove', description: 'Brand new kitchen stove.', image: '/ads/estufa.jpg', price: 300, location: 'Chicago, IL', date: '2021-01-03', url: '' }
])

const isLoading = ref(true)
const adsListRef = ref<HTMLElement | null>(null) // Reference for the list container
const lastItemRef = ref<HTMLElement | null>(null) // Reference for the last item

setTimeout(() => {
  isLoading.value = false
}, 3000)

// Swipe detection
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (event: TouchEvent) => {
  touchStartX = event.touches[0].clientX
}

const handleTouchEnd = () => {
  if (touchStartX - touchEndX > 50) {
    // Left swipe detected
    loadMoreAds()
  }
}

const loadMoreAds = async () => {
  ads.value.push(
    {
      id: String(ads.value.length + 1),
      title: 'New Item ' + (ads.value.length + 1),
      description: 'Dynamically added item.',
      image: '/ads/default.jpg',
      price: 900,
      location: 'New Location',
      date: new Date().toISOString().split('T')[0],
      url: ''
    },
    {
      id: String(ads.value.length + 2),
      title: 'New Item ' + (ads.value.length + 2),
      description: 'Dynamically added item.',
      image: '/ads/default.jpg',
      price: 950,
      location: 'New Location',
      date: new Date().toISOString().split('T')[0],
      url: ''
    }
  )

  await nextTick() // Wait for DOM to update

  // Scroll to the newly added last item
  if (lastItemRef.value) {
    lastItemRef.value.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  }
}
</script>

<template>
  <section v-if="!isLoading">
    <Title :view="'ver más'" :title="'Anuncios Recientes'" />

    <!-- Scrollable container -->
    <ul ref="adsListRef" class="product-card">
      <li
        v-for="(ad, index) in ads"
        :key="ad.id"
        :ref="index === ads.length - 1 ? (el) => (lastItemRef = el) : null"
        @touchstart="index === ads.length - 1 ? handleTouchStart($event) : null"
        @touchend="index === ads.length - 1 ? handleTouchEnd() : null"
      >
        <div class="items">
          <div class="item">
            <div class="condition"><p>usado</p></div>
            <ProductImage />
            <div class="details">
              <h3>{{ ad.title }}</h3>
              <p>{{ ad.description }}</p>
              <p class="price">Precio: {{ ad.price }}</p>
              <p>{{ ad.location }}</p>
              <p>{{ ad.date }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>
  <TitleSkeleton v-if="isLoading" />
  <ProductCardSkeleton v-if="isLoading" />
</template>

<style scoped lang="scss">
.product-card {
  display: flex;
  justify-content: space-between;
  padding-bottom: 12px;
  margin: 20px auto 0;
  max-width: var(--max-width);
  list-style: none;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    display: block;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--border);
    border-radius: 10px;
  }

  li {
    .items {
      scroll-snap-align: start;
    }

    .item {
      margin-left: 5px;
      margin-right: 16px;
      position: relative;
      list-style-type: none;
      box-shadow: var(--shadow);
      border-radius: 12px;
      background-color: var(--background);
      width: 300px;
      height: 100%;

      .condition {
        position: absolute;
        top: .4rem;
        right: .4rem;
        padding: .2rem .6rem;
        border-radius: 1rem;
        background-color: var(--black);
        color: var(--white);
        z-index: 2;

        p {
          font-weight: 500;
        }
      }

      .details {
        padding: .5rem .9rem;

        h3 {
          font-size: 1.25rem;
          color: var(--heading);
          padding-bottom: .3rem;
          font-weight: 600;
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
      }
    }
  }
}
</style>
