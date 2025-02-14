<script setup lang="ts">
import CommentSvg from '~/components/icons/safety-tips/CommentSvg.vue'
import ThumbsUpSvg from '~/components/icons/safety-tips/ThumbsUpSvg.vue'
import PostSvg from '~/components/icons/safety-tips/PostSvg.vue'

</script>

<template>
  <div class="site-info-container">
    <div class="column">
      <PostSvg />
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

<style scoped lang="scss">
.site-info-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 44px;
  .column {
    text-align: center;

    h2 {
      font-size: 20px;
      margin-bottom: 10px;
      color: var(--color-heading);
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 1024px) {
    gap: 40px;
    .site-info-container {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
}

</style>