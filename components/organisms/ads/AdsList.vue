<script setup lang="ts">
import { ref } from 'vue'
import { ads } from './data'
import HeartSvg from '@/components/icons/shared/HeartSvg.vue'
import HeartFillSvg from '@/components/icons/shared/HeartFillSvg.vue'
import AdsSkeleton from '~/components/atoms/loaders/skeleton/AdsSkeleton.vue'

const favorites = ref<string[]>([])
const isLoading = ref(true)

setTimeout(() => {
  isLoading.value = false
}, 3000)

const handleFavorite = (adId: string) => {
  if (!favorites.value.includes(adId)) {
    favorites.value.push(adId)
  } else {
    favorites.value = favorites.value.filter(id => id !== adId)
  }
}
</script>

<template>
  <section v-if="!isLoading" class="ads-container">
    <ul>
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
  margin-top: 20px;

  ul {
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
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
}
</style>
