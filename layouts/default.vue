<script setup lang="ts">
import Header from '~/components/organisms/header.vue'
import Footer from '~/components/organisms/footer.vue'
import Loading from '~/components/atoms/loading/loading-background/index.vue'

const loading = ref(true)

onMounted(() => {
  if (typeof window !== 'undefined') {
    const theme = localStorage.getItem('theme')

    if (theme === null) {
      localStorage.setItem('theme', 'dark')
      document.documentElement.setAttribute("data-color-scheme", "dark")
      loading.value = false
    } else {
      document.documentElement.setAttribute("data-color-scheme", theme === "dark" ? "dark" : "light")
      loading.value = false
    }
  }
})

useHead({
  htmlAttrs: {
    lang: 'es'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
  ],
})

</script>

<template>
  <Loading v-if="loading" />

  <div v-else>
    
    <Header />
    <article>
      <NuxtPage />
    </article>
    <Footer />
  </div>
</template>
