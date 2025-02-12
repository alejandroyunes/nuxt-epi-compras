<script setup>
import { ref } from 'vue'
import FacebookSvg from '~/components/icons/social/FacebookSvg.vue'
import TwitterSvg from '~/components/icons/social/TwitterSvg.vue'
import InstagramSvg from '~/components/icons/social/InstagramSvg.vue'

const currentYear = ref(new Date().getFullYear())

const socialLinks = [
  { icon: FacebookSvg, to: '', label: 'Visítanos en Facebook' },
  { icon: TwitterSvg, to: '', label: 'Visítanos en Twitter' },
  { icon: InstagramSvg, to: '', label: 'Visítanos en Instagram' },
]

</script>

<template>
  <footer class="footer-content">

    <NuxtImg class="logo" src="/logo.png" alt="dental irrigator logo" format="png" />
    <h2 class="title">Best Dental Irrigators for Healthy Teeth & Gums in 2025</h2>

    <div className="secure-pay">
      <div class="secure-image">
        <p>Secure Payment through Amazon</p>
        <NuxtImg src="/images/secure-pay.webp" alt="Secure Payment through Amazon" format="png" />
      </div>
      <p>We include products that we believe are useful for our readers. If you purchase through links on this page, we
        may earn a small commission.</p>
    </div>

    <ul class="social-links">
      <li class="item" v-for="socialLink in socialLinks" :key="socialLink.to">
        <NuxtLink :to="socialLink.to" :aria-label="socialLink.label" rel="noopener noreferrer" target="_blank">
          <component :is="socialLink.icon" />
        </NuxtLink>
      </li>
    </ul>

    <div class="legal">
      <NuxtLink to="/legal/cookies">
        <p>Cookie Policy</p>
      </NuxtLink>

      <NuxtLink to="/legal/legal-notice">
        <p>Legal Notice</p>
      </NuxtLink>

      <NuxtLink to="/legal/privacy">
        <p>Privacy Policy</p>
      </NuxtLink>
    </div>

    <p class="copyright">&copy; {{ currentYear }} dental-irrigator.net</p>

  </footer>
</template>

<style lang="scss" scoped>
.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 20px 20px;
  margin-bottom: 20px;
  max-width: var(--max-width);
  margin: 0 auto;

  .logo {
    width: 100px;
    height: 100px;
  }

  .secure-pay {
    width: 100%;

    p {
      text-align: center;
      margin: .5rem 0;
      font-size: 1.125rem;
    }

    .secure-image {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      img {
        width: 280px;
      }
    }
  }

  .title {
    margin: 10px 0;
    font-size: 1.5rem;
    color: var(--heading);
  }

  .social-links {
    display: flex;
    gap: 24px;
    padding: 0;
    list-style: none;
    margin-top: 24px;

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

  .copyright {
    color: var(--text);
    font-size: .9rem;
  }

  .legal {
    padding-top: 1rem;
    display: flex;

    p {
      color: var(--text);
      font-size: 1rem;
      margin: .5rem .5rem .5rem 0;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
