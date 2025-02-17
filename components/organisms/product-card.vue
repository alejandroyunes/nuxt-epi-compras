<script setup lang="ts">
import { ref } from 'vue'
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

const isLoading = ref(true)

setTimeout(() => {
  isLoading.value = false
}, 3000)


const images = ref([
  "https://random.imagecdn.app/500/300",
  "https://random.imagecdn.app/500/300",
  "https://random.imagecdn.app/500/300",
])

</script>

<template>
  <section v-if="!isLoading">

    <Title :view="'ver más'" :title="'Anuncios Recientes'" />

    <ul class="product-card">
      <li v-for="ad in ads" :key="ad.id">
        <div class="items">

          <div class="item">
            <div class="condition">
              <p>usado</p>
            </div>
            <ProductImage :images="images" />

            <div class="details">
              <div class="title">
                <h3>{{ ad.title }}</h3>
              </div>

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
        background-color: var(--white);
        color: var(--color-text);
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
