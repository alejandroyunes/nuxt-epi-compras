<script lang="ts" setup>
import ExitSvg from '~/components/icons/ExitSvg.vue'

import FacebookSvg from '~/components/icons/social/FacebookSvg.vue'
import TwitterSvg from '~/components/icons/social/TwitterSvg.vue'
import InstagramSvg from '~/components/icons/social/InstagramSvg.vue'
import ArrowDownSvg from '~/components/icons/ArrowDownSvg.vue'

const isSubMenuOpen = ref(false)

const toggleSubMenu = () => {
  isSubMenuOpen.value = !isSubMenuOpen.value
}

const { toggle, isOpen } = defineProps<{
  toggle: () => void
  isOpen: boolean | undefined
}>()

const links = [
  {
    title: 'Top Best of 2025',
    link: '/affordable/best',
  },
  {
    title: 'Affortable Counter Top',
    link: '/affordable/counter-top',
  },
  {
    title: ' Affortable Portable',
    link: '/affordable/portable',
  },
  {
    title: 'Best Counter Top',
    link: '/best/counter-top',
  },
  {
    title: 'Best Portable',
    link: '/best/portable',
  },
]

const socialLinks = [
  { icon: FacebookSvg, to: 'https://facebook.com' },
  { icon: TwitterSvg, to: 'https://twitter.com' },
  { icon: InstagramSvg, to: 'https://instagram.com' },
]

const tipsLinks = [
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

  <div :class="[isOpen === undefined ? 'display-none' : 'top-nav',
  isOpen ? 'top-slide-in' : 'top-slide-out']">

    <div class="top-nav-header">

      <NuxtLink @click="toggle" to="/" class="top-nav-logo">
        <NuxtImg class="image" src="/logo.png" alt="Logo de páginas profesionales" format="png" />
      </NuxtLink>

      <div @click="toggle" class="animation-exit">
        <ExitSvg />
      </div>
    </div>

    <div class="top-nav-content">

      <nav class="top-nav-list">
        <ul>
          <li v-for="(link, index) in links" :key="index" @click="toggle()">
            <NuxtLink :to="link.link" >
              <p>{{ link.title }}</p>
            </NuxtLink>
          </li>
          <li @click="toggleSubMenu" class="submenu">
              
            <p class="submenu-title"><ArrowDownSvg />Tips</p>
            <ul v-if="isSubMenuOpen">
              <li v-for="(link, index) in tipsLinks" :key="index"  @click="toggle()">
                <NuxtLink class="item" :to="link.link">
                  <p>{{ link.title }}</p>
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="top-nav-contact">

        <p class="contact-tel"><a href="https://dental-irrigator.net/">dental-irrigators.net</a></p>
        <p class="contact-email">
          <a href="mailto:alejandroyunes@outlook.com">Check out our social media</a>
        </p>

        <ul class="social-links">
          <li class="item" v-for="socialLink in socialLinks" :key="socialLink.to">
            <NuxtLink :to="socialLink.to">
              <component :is="socialLink.icon" />
            </NuxtLink>
          </li>
        </ul>
      </div>

    </div>

  </div>

  <div v-if="isOpen" @click="toggle" class="content-bg" />
</template>

<style lang="scss" scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 80vw;
  height: auto;
  will-change: transform;
  background-color: var(--background);
  overflow-y: auto;

  .top-nav-header {
    display: flex;
    padding: 0 18px;
    font-size: 24px;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    background-color: var(--background);

    .top-nav-logo {
      img {
        height: 100%;
        width: 48px;
        display: flex;
        align-items: center;
        justify-content: baseline;
      }
    }

    .animation-exit {
      display: flex;
      cursor: pointer;
      background-color: var(--background-opposite);
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;

      svg {
        fill: var(--background);
        width: 24px;
        height: 24px;
      }
    }
  }

  .top-nav-content {
    display: grid;
    align-items: center;
    height: 100%;
    background-color: var(--background);

    .top-nav-list {
      font-size: 16px;
      background-color: var(--background);
      padding: 4px 0 8px;

      ul {
        list-style-type: none;
        padding: 0;

        li {
          display: flex;
          align-items: center;
          margin-bottom: 6px;
          cursor: pointer;
          padding: 10px 20px 10px 40px;
          font-size: 18px;
          color: var(--heading);

          p {
            color: var(--heading);
          }

          &:hover {
            background-color: var(--background-base);
          }

        }
      }

      .submenu {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 10px 20px 10px;

        .submenu-title {
          display: flex;
          align-items: center;
          padding-left: .5rem;
        }

        svg {
          width: 24px;
          height: 24px;
          stroke: var(--heading);
          rotate: 270deg;
          margin-right: .5rem;
        }

        ul {
          list-style-type: none;
          color: var(--heading);
          cursor: pointer;
          font-size: 18px;
          padding: 0;
          width: 100%;

          li {

            &:hover {
              background-color: var(--background-soft);
            }
          }
        }
      }

    }

    .top-nav-contact {
      border-top: 1px solid var(--background-opposite-base);
      background-color: var(--background);
      padding-bottom: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .contact-tel {
        padding-top: 16px;

        a {
          font-size: 18px;
          color: var(--heading);
          font-weight: bold;
        }
      }

      .contact-email {
        padding-top: 8px;

        a {
          font-size: 18px;
          color: var(--heading);
        }
      }

      .social-links {
        display: flex;
        justify-content: center;
        gap: 16px;
        padding: 0;
        list-style: none;
        margin-top: 16px;

        .item {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          color: var(--background);
          background-color: var(--background-opposite-base);
          border-radius: 50%;
          width: 40px;
          height: 40px;

          a {
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            width: 100%;
          }

          svg {
            fill: var(--background);
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }

  &.top-slide-in {
    animation: topSlideIn 0.5s forwards;
    z-index: 11;
  }

  &.top-slide-out {
    animation: topSlideOut 0.5s forwards;
    z-index: 11;
  }

  @keyframes topSlideIn {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0%);
    }
  }

  @keyframes topSlideOut {
    0% {
      transform: translateY(0%);
    }

    100% {
      transform: translateY(-100%);
    }
  }

  @media (max-width: 900px) {
    right: -80vw;
    width: 80vw;
  }
}
</style>