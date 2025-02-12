<script setup lang="ts">

type Type = {
  title: string
  description: string
  image: string
  link: string
}

const { types } = defineProps<{types: Type[]}>()

</script>
<template>

  <section class="types-grid" id="types">
    <div v-for="(type, index) in types" :key="index" class="type-card">
      <div class="type-content">
        <h3>{{ type.title }}</h3>
        <p>{{ type.description }}</p>
        <NuxtLink :to="type.link" class="learn-more">
          view more →
        </NuxtLink>
      </div>
      <div class="type-image">
        <img :src="type.image" :alt="type.title">
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped>

  .types-grid {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 4rem;
    max-width: var(--tablet-width);
    margin: 0 auto;

    @media (max-width: 1024px) {
      max-width: 100%;
    }
  }

  .type-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 2rem;
    background: var(--background-dark);
    border-radius: 1rem;
    overflow: hidden;
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .type-content {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        font-size: 1.75rem;
        margin-bottom: 1rem;
        color: var(--white);
      }

      p {
        margin-bottom: 1.5rem;
        line-height: 1.7;
        color: var(--white);
        font-size: 1.125rem;
      }

      .learn-more {
        display: inline-block;
        color: var(--white);
        text-decoration: none;
        font-weight: 600;
        transition: transform 0.3s ease;
        text-decoration: underline;
        &:hover {
          transform: translateX(5px);
        }
      }
    }

    .type-image {
      justify-self: center;
      align-self: center;
      img {
        width: 100%;
        height: 100%;
        max-height: 300px;
        object-fit: cover;
        border-radius: 0.5rem;

        @media (max-width: 768px) {}

      }
    }
  }
</style>
