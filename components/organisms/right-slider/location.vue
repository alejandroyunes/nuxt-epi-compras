<script setup lang="ts">
import { ref } from 'vue'
import CircleLoader from '~/components/atoms/loaders/circle-icon/CircleLoader.vue'
import ArrowRightSvg from '~/components/icons/shared/ArrowRightSvg.vue'
import SearchSvg from '~/components/icons/shared/SearchSvg.vue'
import ExitSvg from '../../icons/ExitSvg.vue'
import LocationSvg from './icons/LocationSvg.vue'
import './scss/location.scss'
import './scss/styles.scss'

interface LocationType {
  latitude: number
  longitude: number
}

interface ClosestCityType {
  city: string
  distance: number
}

interface LocationTypes {
  city: string
  latitude: number
  longitude: number
}

const colombiaCoordinates: LocationTypes[] = [
  { city: 'Bogotá', latitude: 4.6097, longitude: -74.0817 },
  { city: 'Medellín', latitude: 6.1924, longitude: -75.5963 },
  { city: 'Cali', latitude: 3.4516, longitude: -76.5320 },
  { city: 'Barranquilla', latitude: 10.9639, longitude: -74.7967 },
  { city: 'Cartagena', latitude: 10.3910, longitude: -75.4794 },
  { city: 'Santa Marta', latitude: 11.2404, longitude: -74.1990 },
  { city: 'Manizales', latitude: 5.0702, longitude: -75.5136 },
  { city: 'Pereira', latitude: 4.8136, longitude: -75.6961 },
  { city: 'Cúcuta', latitude: 7.8938, longitude: -72.5078 },
  { city: 'Ibagué', latitude: 4.4389, longitude: -75.2322 },
  { city: 'Neiva', latitude: 2.9273, longitude: -75.2819 },
  { city: 'Villavicencio', latitude: 4.1420, longitude: -73.6266 },
  { city: 'Bucaramanga', latitude: 7.1198, longitude: -73.1227 },
  { city: 'Pasto', latitude: 1.2136, longitude: -77.2811 },
  { city: 'Popayán', latitude: 2.4386, longitude: -76.6132 },
  { city: 'Armenia', latitude: 4.5341, longitude: -75.6751 },
  { city: 'Montería', latitude: 8.7555, longitude: -75.8885 },
  { city: 'Sincelejo', latitude: 9.2960, longitude: -75.3978 },
  { city: 'Valledupar', latitude: 10.4633, longitude: -73.2532 },
  { city: 'Tunja', latitude: 5.5352, longitude: -73.3670 },
  { city: 'Riohacha', latitude: 11.5444, longitude: -72.9060 },
  { city: 'Quibdó', latitude: 5.6947, longitude: -76.6619 },
  { city: 'Florencia', latitude: 1.6144, longitude: -75.6062 },
  { city: 'Yopal', latitude: 5.3375, longitude: -72.3956 },
  { city: 'Mocoa', latitude: 1.1518, longitude: -76.6464 },
  { city: 'Puerto Carreño', latitude: 6.1891, longitude: -67.4850 },
  { city: 'San José del Guaviare', latitude: 2.5730, longitude: -72.6459 },
  { city: 'Inírida', latitude: 3.8652, longitude: -67.9239 },
  { city: 'Mitú', latitude: 1.1986, longitude: -70.1733 },
  { city: 'Leticia', latitude: -4.2032, longitude: -69.9350 },
]

const showLocation = ref(false)
const city = ref<string>(localStorage.getItem('city') || '')
const cityBlocked = ref(false)
const errorCity = ref(false)
const loadingCity = ref(false)
const searchResults = ref<string[]>([])
const searchValue = ref('')

const toggleSlider = () => {
  showLocation.value = !showLocation.value
}

const getLocationCity = ({ latitude, longitude }: LocationType) => {

  const closestCity = colombiaCoordinates.reduce((closest: ClosestCityType, current: LocationTypes) => {
    const distanceToCurrent = Math.sqrt(
      Math.pow(latitude - current.latitude, 2) +
      Math.pow(longitude - current.longitude, 2)
    )

    if (distanceToCurrent < closest.distance) {
      return { city: current.city, distance: distanceToCurrent }
    }

    return closest
  }, { city: '', distance: Number.MAX_VALUE })

  return closestCity.city
}

const getCurrentLocation = () => {
  showLocation.value = false
  loadingCity.value = true

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        const locationObject = { latitude, longitude }
        const citySelected = getLocationCity(locationObject)
        city.value = citySelected
        localStorage.setItem('city', citySelected)
        loadingCity.value = false
      },
      () => {
        cityBlocked.value = true
      }
    )
  } else {
    errorCity.value = true
  }
}

const updateCurrentCity = (citySelected: string) => {
  city.value = citySelected
  localStorage.setItem('city', citySelected)

  showLocation.value = false
  searchResults.value = []
  searchValue.value = ''
}

const handleInputChange = (event: Event) => {
  searchValue.value = (event.target as HTMLInputElement).value

  searchResults.value = []

  if (searchValue.value.length > 0) {
    searchResults.value = colombiaCoordinates
      .filter((city) => city.city.toLowerCase().includes(searchValue.value.toLowerCase()))
      .map((city) => city.city)
  }
}

</script>

<template>
  <div @click="toggleSlider" class="location-outer">
    <LocationSvg class="icon location-icon" />

    <div class="location-city">
      <CircleLoader v-if="loadingCity" />
      <p v-else-if="city">{{ city }}</p>
      <p v-else>Ciudad</p>
    </div>
  </div>

  <div class="slider-outer" :class="{ 'open': showLocation }">

    <div class="slider-inner">

      <div class="location-current">
        <div class="location-title">
          <p>¿Dónde quieres buscar?</p>
        </div>

        <div class="location-current-inner" @click="getCurrentLocation">
          <LocationSvg class="icon location-icon" />

          <p v-if="!errorCity && !cityBlocked">
            Usar la ubicación actual
          </p>

          <p v-if="errorCity">
            Hubo un error en la ubicación
          </p>

          <p v-if="cityBlocked">
            Ubicación bloqueada. Verifique la configuración del navegador y actualice.
          </p>
        </div>
      </div>

      <div class="location-search">

        <form class="location-form">
          <SearchSvg class="search icon" />
          <input class="location-input" type="text" placeholder="Buscar ciudad" :value="searchValue" @input="handleInputChange" />

          <ArrowRightSvg class="arrow icon" />
        </form>
      </div>

      <div class="location-result">
        <ul v-if="searchResults.length > 0">
          <li v-for="city in searchResults" :key="city" @click="updateCurrentCity(city)">{{ city }}</li>
        </ul>
      </div>

    </div>

    <div class="slider-exit" @click="toggleSlider()">
      <ExitSvg class="icon" />
    </div>

  </div>

  <div @click="toggleSlider()" :class="{ 'slider-bg': showLocation }"></div>
</template>