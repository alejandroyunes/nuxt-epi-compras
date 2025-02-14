<script setup lang="ts">

import CarServiceSvg from '~/components/icons/ad-post/CarServiceSvg.vue'
import GamePadSvg from '~/components/icons/ad-post/GamePadSvg.vue'
import HouseServiceSvg from '~/components/icons/ad-post/HouseServiceSvg.vue'
import ServicesSvg from '~/components/icons/ad-post/ServicesSvg.vue'

import TitlePost from './title-post.vue'
import GoBack from './go-back.vue'

</script>

<template>
  <section>
    <TitlePost title="¡Hola! ¿qué vas a publicar?" />
    <GoBack :goBackUrl="'/'" />

    <div class="ad-post">

      <NuxtLink :to="'/publicar/inmuebles'">
        <div class="item">
          <p>Inmuebles</p>
          <div class="ad-post-svg">
            <HouseServiceSvg />
          </div>
        </div>
      </NuxtLink>

      <div class="item">
        <p>Productos</p>
        <div class="ad-post-svg">
          <GamePadSvg />
        </div>
      </div>

      <div class="item">
        <p>Vehículos</p>
        <div class="ad-post-svg">
          <CarServiceSvg />
        </div>
      </div>

      <div class="item">
        <p>Servicios</p>
        <div class="ad-post-svg">
          <ServicesSvg />
        </div>
      </div>

    </div>

  </section>
</template>

<style lang="scss" scoped>
.ad-post {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 20px auto 0;
  gap: 20px;
  max-width: var(--max-width);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      color: var(--text);
    }
  }

  .ad-post-svg {
    width: 180px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    border: 1px solid var(--primary);
    cursor: pointer;

    @media (hover: hover) {
      &:hover {
        background-color: var(--primary);
      }
    }

    @media (max-width: 768px) {
      width: 140px;
      height: 120px;
    }

    @media (max-width: 480px) {
      width: 120px;
      height: 100px;
    }
  }
}
</style>
