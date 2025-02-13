<script setup lang="ts">
import Title from '~/components/atoms/title/Title.vue'

interface Category {
  name: string
  image: string
  alt: string
  url: string
}

const categories: Category[] = [
  {
    name: 'Propiedades y Alquileres',
    image: '/categories/home.webp',
    alt: 'Propiedades y Alquileres Image',
    url: ''
  },
  {
    name: 'Teléfonos Inteligentes',
    image: '/categories/smartphones.webp',
    alt: 'Teléfonos Inteligentes Image',
    url: ''
  },
  {
    name: 'Artículos del Hogar',
    image: '/categories/home-articles.webp',
    alt: 'Artículos del Hogar Image',
    url: ''
  },
  {
    name: 'Carros y Motos',
    image: '/categories/carros.webp',
    alt: 'Carros y Motos Image',
    url: ''
  },
  {
    name: 'Portátiles',
    image: '/categories/laptop.webp',
    alt: 'Portátiles Image',
    url: ''
  },
  {
    name: 'Deportes',
    image: '/categories/futbol.webp',
    alt: 'Deportes Image',
    url: ''
  },
  {
    name: 'Mascotas',
    image: '/categories/pets.webp',
    alt: 'Mascotas Image',
    url: ''
  },
  {
    name: 'Instrumentos',
    image: '/categories/guitar.webp',
    alt: 'Instrumentos Image',
    url: ''
  },
  {
    name: 'Servicios',
    image: '/categories/services.webp',
    alt: 'Servicios Image',
    url: ''
  },
  {
    name: 'Arte',
    image: '/categories/art.webp',
    alt: 'Arte Image',
    url: ''
  },
  {
    name: 'Moda y Belleza',
    image: '/categories/vestido.webp',
    alt: 'Moda y Belleza Image',
    url: ''
  },
  {
    name: 'Herramientas',
    image: '/categories/tools.webp',
    alt: 'Herramientas Image',
    url: ''
  },
  {
    name: 'Otros',
    image: '/categories/other.webp',
    alt: 'Otros Image',
    url: ''
  },
  {
    name: 'Electrodomésticos',
    image: '/categories/homeappliances.webp',
    alt: 'Electrodomésticos Image',
    url: ''
  }
]


</script>

<template>
  <section>
    <Title :view="'ver más'" :title="'Categorías'" />

    <ul>
      <li v-for="category in categories" :key="category.name">
        <NuxtLink :to="category.url">
          <img :src="category.image" :alt="category.alt" width="76px" height="76px">
          <h3>{{ category.name }}</h3>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
ul {
  display: flex;
  justify-content: space-between;
  padding: 0;
  list-style: none;
  overflow-x: scroll;
  overflow-y: hidden;
  margin-top: 24px;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--border);
    border-radius: 10px;
  }
}

li {
  scroll-snap-align: start;
  text-align: center;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 32px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  &:last-child {
    padding-right: 0;
  }
}

img {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  object-fit: cover;
}

h3 {
  font-size: 1rem;
  color: var(--heading);
  line-height: 24px;
  margin-bottom: 8px;
}
</style>