<script lang="ts" setup>
import AdsList from '~/components/organisms/ads/AdsList.vue'
import TitleC from '~/components/atoms/title/TitleC.vue'
</script>

<template>
  <TitleC :view="'ver más'" :title="'Anuncios Recientes'" :border="false" />
  <AdsList />
</template>
