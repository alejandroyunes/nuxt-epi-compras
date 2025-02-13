<script setup lang="ts">
import './3-card-site-info.scss'
import AdsColorSvg from '../icons/AdsColorSvg.vue'
import CommentSvg from '../icons/CommentSvg.vue'
import ThumbsUpSvg from '../icons/ThumbsUpSvg.vue'

</script>

<template>
  <div class="site-info-container">
    <div class="column">
      <AdsColorSvg />
      <h2>Publica tu Anuncio</h2>
      <p>Con solo tu número puedes publicar un anuncio.</p>
    </div>
    <div class="column">
      <CommentSvg />
      <h2>Ponerse en Contacto</h2>
      <p>Una vez que publiques tu anuncio, los clientes interesados podrán contactarte directamente para obtener más información.</p>
    </div>
    <div class="column">
      <ThumbsUpSvg />
      <h2>Cierra el Trato</h2>
      <p>En esta fase, podrás concretar la venta y cerrar el trato de manera segura y en un lugar confiable.</p>
    </div>
  </div>
</template>