<script lang="ts" setup>
import { ref } from 'vue'
import { setDarkMode } from '~/utils/utils'

import MoonSvg from '~/components/icons/header/MoonSvg.vue'
import SunSvg from '~/components/icons/header/SunSvg.vue'
import Dropdown from '~/components/organisms/menus/dropdown/index.vue'
import SliderTopNav from '~/components/organisms/menus/sliders/index.vue'

import HamburgerVerticalSvg from '~/components/icons/header/HamburgerSvg.vue'

const isSliderOpen = ref<boolean | undefined>(undefined)
const isDarkMode = ref(false)

onMounted(() => {
  const theme = localStorage.getItem('theme')

  if (theme === 'dark') {
    isDarkMode.value = true
  }
})

const handleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  setDarkMode(isDarkMode.value)
}

const toggleSlider = () => {
  isSliderOpen.value = !isSliderOpen.value
}

</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo-and-title">
        <NuxtLink to="/" class="logo">
          <div class="image">
            <NuxtImg src="/logo.png" alt="Denatl Irrigator" format="png" />
          </div>
          <h1>Dental Irrigator</h1>
        </NuxtLink>
      </div>

      <div class="details">

        <div class="dark-mode-icons" @click="handleTheme()">
          <MoonSvg v-if="!isDarkMode" class="icon sun" aria-label="Cambiar tema del sitio web" />
          <SunSvg v-else class="icon moon" aria-label="Cambiar tema del sitio web" />
        </div>

        <Dropdown class="dropdown" />

        <div class="hamburger-menu mobile-only" @click="toggleSlider">
          <HamburgerVerticalSvg class="icon" aria-label="Abrir menú de navegación" />
        </div>

        <SliderTopNav :toggle="toggleSlider" :isOpen="isSliderOpen" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  z-index: 10;
  position: fixed;
  backdrop-filter: blur(5px);
  border-radius: 40px;
  width: 100%;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--background-base);
    box-shadow: var(--shadow-base);
    max-width: var(--max-width);
    border-radius: 40px;
    padding: 0 28px;
    height: 68px;
    margin: 10px auto 0;
    max-width: var(--large-width);

    .logo-and-title {
      display: flex;
      align-items: center;
      cursor: pointer;

      h1 {
        font-size: 1.5rem;
        color: var(--heading);
        margin-left: 10px;
      }

      .logo {
        display: flex;
        align-items: center;

        .image {
          display: flex;
          align-items: center;
          justify-content: baseline;
          height: auto;

          img {
            width: 56px;
          }
        }
      }
    }

    .details {
      display: flex;
      align-items: center;

      .dark-mode-icons {
        display: flex;
        margin-right: .4rem;
        padding: 20px 0;
        cursor: pointer;

        .sun,
        .moon {
          margin-right: 16px;

          @media (max-width: 768px) {
            margin: 0 10px;
          }
        }

        @media (max-width: 768px) {
          margin-right: 0;
        }
      }

      .dropdown {
        @media (max-width: 800px) {
          display: none;
        }
      }

      .hamburger-menu {
        padding: 10px 10px 10px 0;
        cursor: pointer;

        @media (max-width: 768px) {
          display: flex;
        }
      }

    }
  }

  @media (max-width: 1268px) {
    padding: 0;

    .container {
      padding: 20px;
      margin: 10px 10px 0;
    }
  }
}
</style>