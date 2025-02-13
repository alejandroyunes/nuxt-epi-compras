<script lang="ts" setup>
import { ref } from 'vue'
import { setDarkMode } from '~/utils/utils'

import InputSearch from '~/components/atoms/input-search.vue'
import MoonSvg from '~/components/icons/header/MoonSvg.vue'
import SunSvg from '~/components/icons/header/SunSvg.vue'

import LocationSlider from '~/components/organisms/right-slider/LocationSlider.vue'
import UserMenu from '~/components/organisms/user-menu/UserMenu.vue'
import PlusSvg from '~/components/icons/header/PlusSvg.vue'

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
    <nav class="nav">

      <div class="nav-one">
        <NuxtLink to="/" class="logo">
          <h1>Epi<span>Compras</span></h1>
        </NuxtLink>
        <InputSearch />
      </div>

      <div class="nav-two">

        <div class="nav-left">
          <NuxtLink to="/" class="nav-logo-mobile">
            <h1>Epi<span>Compras</span></h1>
          </NuxtLink>
          <div>
            <LocationSlider />
          </div>
        </div>

        <div class="nav-right">

          <MoonSvg v-show="!isDarkMode" @click="handleTheme" class="icon sun" />
          <SunSvg v-show="isDarkMode" @click="handleTheme" class="icon moon" />

          <UserMenu />

          <PlusSvg class="icon" />
        </div>
      </div>

    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: var(--background-soft);
  
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    max-width: var(--max-width);
    padding: 1rem;

    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 20px;

      .nav-one {
        order: 1;
      }

      .nav-two {
        display: flex;
      }
    }

    .nav-one {
      display: flex;
      flex: 0;
      align-items: center;

      .logo {
        flex: 0;
        margin-right: 8px;
        display: block;
        cursor: pointer;

        h1 {
          color: var(--primary);
          font-weight: 600;
        }
        span {
          color: var(--heading);
        }

        @media (max-width: 1024px) {
          display: none;
        }
      }
    }

    .nav-two {
      display: flex;
      flex: 1;
      align-items: center;

      .nav-left {
        display: flex;
        flex: 1;
        justify-content: space-between;
        align-items: center;

        .nav-logo-mobile {
          display: none;

          @media (max-width: 1024px) {
            display: flex;
            margin-right: 8px;
            cursor: pointer;

            h1 {
              color: var(--primary);
              font-weight: 600;
            }
            span {
              color: var(--heading);
            }
            
          }
        }
      }

      .nav-right {
        display: flex;
        align-items: center;
        justify-content: center;

        .sun,
        .moon {
          margin-right: 10px;
        }
      }
    }

  }
}
</style>