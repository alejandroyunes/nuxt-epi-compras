<script setup lang="ts">
import { ref } from 'vue'
import SearchSvg from '~/components/icons/shared/SearchSvg.vue'
import ArrowRightSvg from '~/components/icons/shared/ArrowRightSvg.vue'
import LocationSlider from '~/components/organisms/right-slider/location.vue'

const inputText = ref('')
const isInputFocused = ref<boolean | undefined>(undefined)

const handleFocus = () => {
  isInputFocused.value = true
}

const handleBlur = () => {
  isInputFocused.value = false
}

</script>

<template>

  <div class="search-location">
    <form class="nav-form">
      <SearchSvg class="search icon" />
      <input type="text" class="nav-input" :class="{ 'expand': isInputFocused, 'shrink': isInputFocused === false }"
        v-model="inputText" @focus="handleFocus" @blur="handleBlur" />
      <ArrowRightSvg class="arrow icon" />
    </form>

    <div class="location">
      <LocationSlider />
    </div>
  </div>

</template>

<style scoped lang="scss">
.search-location {
  display: flex;
  justify-content: space-between;
  width: 100%;

  .nav-form {
    position: relative;
    margin-right: 8px;


    @media (max-width: 758px) {
      width: 100%;
    }

    .nav-input {
      height: 40px;
      border-radius: 12px;
      padding: 8px 0px 8px 36px;
      min-width: 200px;
      width: 100%;
      border: none;
      font-size: 16px;
      outline: 1px solid var(--border);
      background-color: var(--background);
      color: var(--color-heading);


      @keyframes expandWidth {
        0% {
          min-width: 200px;
        }

        100% {
          min-width: 250px;
        }
      }

      @keyframes shrinkWidth {
        0% {
          min-width: 250px;
        }

        100% {
          min-width: 200px;
        }
      }

      &.expand {
        outline: 1px solid var(--primary);
        animation: expandWidth 0.2s linear forwards;
      }

      &.shrink {
        animation: shrinkWidth 0.2s linear forwards;
      }

    }

    .search {
      position: absolute;
      top: 50%;
      left: 8;
      transform: translateY(-50%);
      margin: 0 8px;
    }

    .arrow {
      cursor: pointer;
      position: absolute;
      top: 50%;
      right: 2px;
      margin-right: 8px;
      transform: translateY(-50%);
    }
  }

  .location {
    display: flex;
  }
}
</style>