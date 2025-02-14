<script setup lang="ts">
import { ref } from 'vue'

import HelpSvg from "~/components/icons/menu/HelpSvg.vue"
import LogoutSvg from "~/components/icons/menu/LogoutSvg.vue"
import MessageSvg from "~/components/icons/menu/MessagesSvg.vue"
import AdsSvg from "~/components/icons/menu/AdsSvg.vue"
import HeartSvg from "~/components/icons/shared/HeartSvg.vue"
import ProfileSvg from "~/components/icons/menu/ProfileSvg.vue"
import CircleLoader from '~/components/atoms/loaders/circle-icon/CircleLoader.vue'

import NotificationSlider from '~/components/organisms/right-slider/notification-slider.vue'


const showDropdown = ref(false)
const logged = ref(false)
const loadingProfile = ref(false)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const handleLogin = () => {
  console.log('Login')
  showDropdown.value = false
  
  loadingProfile.value = true
  setTimeout(() => {
    loadingProfile.value = false
    logged.value = !logged.value
  }, 2000)

}

</script>

<template>
  <NotificationSlider v-if="logged" />
  <CircleLoader v-if="loadingProfile" class="profile-loader" />
  <ProfileSvg v-else class="icon user-icon" @click="toggleDropdown" />

  <div class="user-menu-outer" v-if="showDropdown">
    <ul class="menu-dropdown">

      <li href="#" v-if="!logged" class="menu-dropdown-item">
        <ProfileSvg class="icon" />
        <p>Crear Perfil</p>
      </li>

      <li href="#" v-if="logged" class="menu-dropdown-item">
        <ProfileSvg class="icon" />
        <p>Perfil</p>
      </li>

      <li href="#" v-if="logged" class="menu-dropdown-item">
        <AdsSvg class="icon" />
        <p>Publicaciones</p>
      </li>

      <li href="#" v-if="logged" class="menu-dropdown-item">
        <MessageSvg class="icon" />
        <p>Mensajes</p>
      </li>

      <li href="#" v-if="logged" class="menu-dropdown-item">
        <HeartSvg class="icon" />
        <p>Favoritos</p>
      </li>

      <li href="#" class="menu-dropdown-item">
        <HelpSvg class="icon" />
        <p>Centro de ayuda</p>
      </li>

      <li @click="handleLogin" v-if="!logged" class="menu-dropdown-item">
        <LogoutSvg class="icon" />
        <p>Entrar</p>
      </li>

      <li @click="handleLogin" v-if="logged" class="menu-dropdown-item">
        <LogoutSvg class="icon" />
        <p>Salir</p>
      </li>

    </ul>
  </div>

  <div @click="toggleDropdown" :class="{ 'menu-dropdown-bg': showDropdown }"></div>
</template>

<style scoped lang="scss">
.profile-loader {
  margin-right: 12px;
}
.user-icon {
  margin-right: 10px;
}
.user-menu-outer {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  .menu-dropdown {
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
    margin: 15px;
    background-color: var(--background);

    .menu-dropdown-item {
      color: var(--heading);
      font-size: 16px;
      padding: 5px 20px;
      display: flex;
      align-items: center;
      cursor: pointer;
      white-space: nowrap;
      text-decoration: none;
      background-color: 'none';

      &:hover {
        background-color: var(--border);
      }

      &:first-child:hover {
        border-top-left-radius: 16px;
      }

      &:last-child:hover {
        border-bottom-right-radius: 16px;
      }

      p {
        margin-left: 16px;
      }
    }
  }

  .menu-dropdown::after {
    content: '';
    position: absolute;
    top: -14px;
    right: 2px;
    background-color: var(--primary);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    z-index: 1000;
  }
}

.menu-dropdown-bg {
  position: fixed;
  width: 100vw;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: rgba(20, 22, 27, 0.3);
  z-index: 100;
}

</style>
