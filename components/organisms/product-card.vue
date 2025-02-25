<script setup lang="ts">
import { nextTick, ref } from 'vue'
import ProductCardSkeleton from '~/components/atoms/loaders/skeleton/product-card.vue'
import TitleSkeleton from '~/components/atoms/loaders/skeleton/title.vue'
import ProductImage from '~/components/atoms/product-image.vue'
import Title from '~/components/atoms/title.vue'
import RightArrowSvg from '~/components/icons/arrows/RightArrowSvg.vue'

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
  { id: '3', title: 'Kitchen Stove', description: 'Brand new kitchen stove.', image: '/ads/estufa.jpg', price: 300, location: 'Chicago, IL', date: '2021-01-03', url: '' },
  { id: '4', title: 'New Car', description: 'Brand new car.', image: '/ads/carro.jpg', price: 400, location: 'San Francisco, CA', date: '2021-01-04', url: '' },
  { id: '5', title: 'Used Car', description: 'Used car for sale.', image: '/ads/carro.jpg', price: 500, location: 'Miami, FL', date: '2021-01-05', url: '' },
  { id: '6', title: 'New House', description: 'New house for rent.', image: '/ads/casa.jpg', price: 600, location: 'Seattle, WA', date: '2021-01-06', url: '' },
])

const isLoading = ref(true)

setTimeout(() => {
  isLoading.value = false
}, 5000)


const loadMoreAds = async () => {
  const newAds = Array.from({ length: 5 }).map((_, i) => ({
    id: String(ads.value.length + i + 1),
    title: 'New Item ' + (ads.value.length + i + 1),
    description: 'Dynamically added item.',
    image: '/ads/default.jpg',
    price: 950,
    location: 'New Location',
    date: new Date().toISOString().split('T')[0],
    url: ''
  }))

  ads.value.push(...newAds)

  await nextTick()

  const firstNewAd = document.querySelector(`li[data-ad-id="${newAds[0].id}"]`) as HTMLElement

  if (firstNewAd) {
    firstNewAd.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  }
}

</script>

<template>
  <section v-if="!isLoading">

    <Title :view="'ver más'" :title="'Anuncios Recientes'" />

    <ul>
      <li v-for="ad in ads" :key="ad.id" :data-ad-id="ad.id">
        <div class="item">
          <div class="condition">
            <p>usado</p>
          </div>
          <ProductImage />
          <div class="details">
            <h3>{{ ad.title }}</h3>
            <p>{{ ad.description }}</p>
            <p class="price">Precio: {{ ad.price }}</p>
            <p>{{ ad.location }}</p>
            <p>{{ ad.date }}</p>
          </div>
        </div>
      </li>
      <li class="button">
        <button @click="loadMoreAds">
          <span>
            <RightArrowSvg />
            Más
          </span>
        </button>
      </li>
    </ul>

  </section>

  <TitleSkeleton v-if="isLoading" />
  <ProductCardSkeleton v-if="isLoading" />


</template>


<style scoped lang="scss">
ul {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  justify-content: space-between;
  list-style: none;
  max-width: var(--max-width);
  margin: 1.2rem auto 1rem;
  padding-bottom: .7rem;

  @media (max-width: 1314px) {
    padding: 0 .6rem .7rem;
  }

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
    padding: 0 .5rem;
    scroll-snap-align: start;

    &:first-child {
      padding-left: .5rem;
    }

    .item {
      position: relative;
      list-style-type: none;
      box-shadow: var(--shadow);
      border-radius: .8rem;
      background-color: var(--background);
      min-width: 260px;
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
        height: 240px;

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

  .button {
    display: flex;
    padding: 0;

    button {
      background: var(--primary);
      color: var(--white);
      border: none;
      border-radius: .7rem;
    }
  }
}
</style>
