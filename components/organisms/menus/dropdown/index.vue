<script setup lang='ts'>
import { ref } from 'vue'
import ArrowDownSvg from '~/components/icons/ArrowDownSvg.vue'

const isClicked = ref(false)

const itemClicked = () => {
  isClicked.value = true
  setTimeout(() => {
    isClicked.value = false
  }, 100)
}

const affortableLinks = [
  {
    title: 'Top Best of 2025',
    link: '/affordable/best',
  },
  {
    title: 'Counter Top',
    link: '/affordable/counter-top',
  },
  {
    title: 'Portable',
    link: '/affordable/portable',
  }
]

const bestTopLinks = [
  {
    title: 'Counter Top',
    link: '/best/counter-top',
  },
  {
    title: 'Portable',
    link: '/best/portable',
  },
]

const allOralIrrigators = [
  {
    title: 'Counter Top',
    link: '/all-brands/counter-top',
  },
  {
    title: 'Portable',
    link: '/all-brands/portable',
  },
]

const tips = [
  {
    title: 'How to Use',
    link: '/tips/how-to-use',
  },
  {
    title: 'Oral Hygiene Guide',
    link: '/tips/oral-hygiene-guide',
  },
  {
    title: 'Guide for Bleeding Gums',
    link: '/tips/gum-bleed-care',
  },
  {
    title: 'Avoid Bad Habits',
    link: '/tips/bad-dental-habits',
  },
  {
    title: 'Braces Care',
    link: '/tips/braces-guide',
  },
]

</script>

<template>

  <nav class="menu">
    <ul class="items">

      <li class="item">
        <h3 class="title">Affordable</h3>
        <ArrowDownSvg class="icon arrow-icon" />

        <ul :class="['sub-items', { 'clicked': isClicked }]" @click="itemClicked">
          <li v-for="(item, index) in affortableLinks" :key="index" class="sub-item">
            <NuxtLink class="link" :to="item.link">
              <p>{{ item.title }}</p>
            </NuxtLink>
          </li>
        </ul>
      </li>

      <li class="item">
        <h3 class="title">Best</h3>
        <ArrowDownSvg class="icon arrow-icon" />

        <ul :class="['sub-items', { 'clicked': isClicked }]" @click="itemClicked">
          <li v-for="(item, index) in bestTopLinks" :key="index" class="sub-item">
            <NuxtLink class="link" :to="item.link">
              <p>{{ item.title }}</p>
            </NuxtLink>
          </li>
        </ul>
      </li>

      <li class="item">
        <h3 class="title">All Brands</h3>
        <ArrowDownSvg class="icon arrow-icon" />

        <ul :class="['sub-items', { 'clicked': isClicked }]" @click="itemClicked">
          <li v-for="(item, index) in allOralIrrigators" :key="index" class="sub-item">
            <NuxtLink class="link" :to="item.link">
              <p>{{ item.title }}</p>
            </NuxtLink>
          </li>
        </ul>
      </li>

      <li class="item">
        <h3 class="title">Tips</h3>
        <ArrowDownSvg class="icon arrow-icon" />

        <ul :class="['sub-items', { 'clicked': isClicked }]" @click="itemClicked">
          <li v-for="(item, index) in tips" :key="index" class="sub-item">
            <NuxtLink class="link" :to="item.link">
              <p>{{ item.title }}</p>
            </NuxtLink>
          </li>
        </ul>
      </li>

    </ul>
  </nav>

</template>

<style scoped lang="scss">
.menu {
  padding: 0;

  .items {
    display: flex;
    padding: 0;
    gap: 20px;

    .item {
      display: flex;
      cursor: pointer;
      color: var(--heading);
      position: relative;
      stroke: var(--heading);
      line-height: 2.2rem;
      justify-content: center;
      align-items: center;

      &:hover {
        .arrow-icon {
          transform: rotate(90deg);
        }

        .sub-items {
          opacity: 1;
          visibility: visible;
        }
      }

      .title {
        font-size: 1.4rem;
      }

      .arrow-icon {
        margin-left: 8px;
        width: 1.1rem;
        transition: transform 0.3s ease;
      }

      .sub-items {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0;
        list-style-type: none;
        transform: translateY(16px);
        border-style: solid;
        border-color: var(--background-opposite);
        border-width: 1px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 16px;
        border-top-left-radius: 16px;
        margin: 1.1rem 0.9rem 1rem;
        background-color: var(--background-base);
        z-index: 101;
        transition: opacity 0.3s, visibility 0.3s;
        opacity: 0;
        visibility: hidden;

        .sub-item {

          .link {
            display: flex;
            justify-content: flex-start;
            z-index: 1000;
            color: var(--heading);
            font-size: 1.2rem;
            padding: 8px 20px;
            display: flex;
            align-items: center;
            cursor: pointer;
            white-space: nowrap;
            text-decoration: none;
            background-color: 'none';

            &:hover {
              background-color: var(--background-dark);
              color: var(--white);
            }

            p {
              font-weight: 500;

            }
          }

          &:first-child {
            a:hover {
              border-top-left-radius: 16px;
            }
          }

          &:last-child {
            a:hover {
              border-bottom-right-radius: 16px;
            }
          }
        }
      }

      .sub-items.clicked {
        display: none;
      }
    }
  }
}
</style>
