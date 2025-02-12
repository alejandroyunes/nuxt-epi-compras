<script setup lang="ts">
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}


defineProps<{
  post: BlogPost;
}>();

</script>

<template>
  <article class="blog-card">
    <img :src="post.image" :alt="post.title" class="blog-card__image">
    <div class="blog-card__content">
      <h2 class="blog-card__title">{{ post.title }}</h2>
      <p class="blog-card__meta">
        By {{ post.author }} on {{ post.date }}
      </p>
      <p class="blog-card__excerpt">{{ post.excerpt }}</p>
      <router-link :to="{ name: 'post', params: { id: post.id }}" class="blog-card__link">
        Read More
      </router-link>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.blog-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  &__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  &__content {
    padding: 1.5rem;
  }

  &__title {
    font-size: 1.5rem;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }

  &__meta {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 1rem;
  }

  &__excerpt {
    color: #4a5568;
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  &__link {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #3498db;
    color: white;
    border-radius: 6px;
    text-decoration: none;
    transition: background 0.3s ease;

    &:hover {
      background: #2980b9;
    }
  }
}
</style>