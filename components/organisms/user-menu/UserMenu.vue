<script setup lang="ts">
import { ref } from 'vue'

import './user-menu.scss'

import HelpSvg from "~/components/icons/menu/HelpSvg.vue"
import LogoutSvg from "~/components/icons/menu/LogoutSvg.vue"
import MessageSvg from "~/components/icons/menu/MessagesSvg.vue"
import AdsSvg from "~/components/icons/menu/AdsSvg.vue"
import HeartSvg from "~/components/icons/shared/HeartSvg.vue"
import ProfileSvg from "~/components/icons/menu/ProfileSvg.vue"
import NotificationSlider from '~/components/organisms/right-slider/NotificationSlider.vue'
import CircleLoader from '~/components/atoms/loaders/circle-icon/CircleLoader.vue'

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
