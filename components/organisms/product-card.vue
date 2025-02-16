<script setup lang="ts">
import { ref } from 'vue'
import Title from '~/components/atoms/title/Title.vue'
import HeartFillSvg from '@/components/icons/shared/HeartFillSvg.vue'
import HeartSvg from '@/components/icons/shared/HeartSvg.vue'
import AdsSkeleton from '~/components/atoms/loaders/skeleton/AdsSkeleton.vue'

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

const ads: AdType[] = [
  {
    id: '1',
    title: 'Car for Sale',
    description: 'Well-maintained car available for sale. Low mileage and excellent condition.',
    image: '/ads/carro.jpg',
    price: 100,
    location: 'New York, NY',
    date: '2021-01-01',
    url: ''
  },
  {
    id: '2',
    title: 'Spacious House for Rent',
    description: 'Beautiful house with multiple bedrooms and amenities. Ideal for families.',
    image: '/ads/casa.jpg',
    price: 200,
    location: 'Los Angeles, CA',
    date: '2021-01-02',
    url: ''
  },
  {
    id: '3',
    title: 'Kitchen Stove for Sale',
    description: 'Brand new kitchen stove available at a discounted price. Limited stock!',
    image: '/ads/estufa.jpg',
    price: 300,
    location: 'Chicago, IL',
    date: '2021-01-03',
    url: ''
  },
  {
    id: '4',
    title: 'Refurbished Laptop',
    description:
      'Powerful laptop with upgraded specifications. Perfect for work and entertainment.',
    image: '/ads/laptop.jpg',
    price: 400,
    location: 'Houston, TX',
    date: '2021-01-04',
    url: ''
  },
  {
    id: '5',
    title: 'Electric Stove for Sale',
    description: 'Modern electric stove available for sale. Energy-efficient and easy to use.',
    image: '/ads/estufa.jpg',
    price: 500,
    location: 'Phoenix, AZ',
    date: '2021-01-05',
    url: ''
  },
  {
    id: '6',
    title: 'Gaming Laptop',
    description: 'High-performance gaming laptop with advanced graphics capabilities.',
    image: '/ads/laptop.jpg',
    price: 600,
    location: 'Philadelphia, PA',
    date: '2021-01-06',
    url: ''
  },
  {
    id: '7',
    title: 'Mountain Bike for Sale',
    description: 'Durable mountain bike available for sale. Suitable for off-road adventures.',
    image: '/ads/casa.jpg',
    price: 700,
    location: 'San Antonio, TX',
    date: '2021-01-07',
    url: ''
  },
  {
    id: '8',
    title: 'Beach House for Rent',
    description: 'Luxurious beach house with stunning ocean views. Perfect for vacations.',
    image: '/ads/casa.jpg',
    price: 800,
    location: 'San Diego, CA',
    date: '2021-01-08',
    url: ''
  }
]

const favorites = ref<string[]>([])
const isLoading = ref(true)

setTimeout(() => {
  isLoading.value = false
}, 300)

const handleFavorite = (adId: string) => {
  if (!favorites.value.includes(adId)) {
    favorites.value.push(adId)
  } else {
    favorites.value = favorites.value.filter(id => id !== adId)
  }
}
</script>

<template>
  <section v-if="!isLoading">
    <Title :view="'ver más'" :title="'Anuncios Recientes'" />

    <ul class="ads-container">
      <li v-for="ad in ads" :key="ad.id">
        <div class="li-container">

          <div class="li-item">
            <RouterLink :to="ad.url">
              <img class="ad-image" :src="ad.image" alt="" width="300px" height="165px">
            </RouterLink>
            <div class="ads-info-inner">
              <div class="ads-title">
                <h3>{{ ad.title }}</h3>
                <HeartSvg v-show="!favorites.includes(ad.id)" @click="handleFavorite(ad.id)" class="ad-heart" />
                <HeartFillSvg v-show="favorites.includes(ad.id)" @click="handleFavorite(ad.id)" class="ad-heart-fill" />
              </div>
              <p>{{ ad.description }}</p>
              <p>{{ ad.price }}</p>
              <p>{{ ad.location }}</p>
              <p>{{ ad.date }}</p>
            </div>
          </div>

        </div>
      </li>
    </ul>
  </section>

  <AdsSkeleton v-if="isLoading" />

</template>

<style scoped lang="scss">
.ads-container {
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
    background-color: var(--color-border);
    border-radius: 10px;
  }

  li {
    .li-container {
      scroll-snap-align: start;
    }

    .li-item {
      margin-left: 5px;
      margin-right: 16px;
      position: relative;
      list-style-type: none;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
      background-color: var(--color-background-mute);

      img {
        width: 280px;
        height: auto;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
      }

      .ads-info-inner {
        padding: 16px;

        h3 {
          font-size: 1.25rem;
          color: var(--color-heading);
          margin-bottom: 8px;
          margin-right: 8px;
        }

        p {
          font-size: 1rem;
          color: var(--color-text);
          margin-bottom: 8px;
        }

        .ads-title {
          display: flex;
          justify-content: space-between;

          svg {
            cursor: pointer;

            #path-1 {
              stroke: var(--color-background-oposite);
            }

            #path-2 {
              stroke: var(--primary);
              fill: var(--primary);
            }
          }
        }
      }
    }
  }
}
</style>
