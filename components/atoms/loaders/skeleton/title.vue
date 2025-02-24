<script setup lang="ts">

</script>

<template>
  <section class="title">
    <div>
      <p class="shine-line card-title"></p>
    </div>
    <div>
      <p class="shine-line  card-title card-details"></p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--heading);
  margin: 1rem auto 0; 
  max-width: var(--max-width);

  .shine-line {
    background-image: linear-gradient(90deg, rgba(#fff, 0), rgba(#fff, 0.5), rgba(#fff, 0));
    background-size: 40px 100%;
    background-repeat: no-repeat;
    background-position: left -40px top 0;
    animation: shine-animation 1s ease infinite;

    @keyframes shine-animation {
      to {
        background-position: right -40px top 0;
      }
    }
  }

  .card-title {
    min-height: 1rem;
    width: 180px;
    margin: 1rem .6rem 0;
    border-radius: 8px;
    background-color: var(--text-soft);
  }

  .card-details {
    width: 90px;
    min-height: 12px;
  }
}

</style>