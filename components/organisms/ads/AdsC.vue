<script lang="ts" setup>
import AdsList from '~/components/organisms/ads/AdsList.vue';
import Title from '~/components/atoms/title/Title.vue'
</script>

<template>
  <Title :view="'ver más'" :title="'Anuncios Recientes'" />
  <AdsList />
</template>
