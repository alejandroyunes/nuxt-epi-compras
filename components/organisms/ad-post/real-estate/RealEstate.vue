<script setup lang="ts">
import { ref } from 'vue'

import '../ad-post.scss'
import type { RealEstateTypes } from '../types/RealEstate'
import './real-estate.scss'

import ContractAgreeSvg from '../icons/real-estate/rental-or-sell/ContractAgreeSvg.vue'
import HandWithKeySvg from '../icons/real-estate/rental-or-sell/HandWithKeySvg.vue'
import ApartmentColorSvg from '../icons/real-estate/type-of-property/ApartmentColorSvg.vue'
import BedColorSvg from '../icons/real-estate/type-of-property/BedColorSvg.vue'
import BuildingColorSvg from '../icons/real-estate/type-of-property/BuildingColorSvg.vue'
import ConsultorioColorSvg from '../icons/real-estate/type-of-property/ConsultorioColorSvg.vue'
import FincaColorSvg from '../icons/real-estate/type-of-property/FincaColorSvg.vue'
import HotelColorSvg from '../icons/real-estate/type-of-property/HotelColorSvg.vue'
import HouseColorSvg from '../icons/real-estate/type-of-property/HouseColorSvg.vue'
import ShopColorSvg from '../icons/real-estate/type-of-property/ShopColorSvg.vue'
import TerrenoColorSvg from '../icons/real-estate/type-of-property/TerrenoColorSvg.vue'
import WareHouseSvg from '../icons/real-estate/type-of-property/WareHouseSvg.vue'

import GoBack from '~/c../../title-post.vuepost/go-back/GoBack.vue'
import TitlePost from '../title/title-post.vue'

const isRentingOrSelling = ref(true)
const propertyOptionsSection = ref(false)
const propertyDetails = ref(false)
const isFormSubmitting = ref(false)
const next = ref(false)
const totalSteps = 6
let currentStep = ref(1)


const typeOfPost = ref<'isRenting' | 'isSelling' | undefined>(undefined)
const selectedPropertyType = ref<string | undefined>(undefined)
const propertyTypes = ref(['Apartmentos', 'Casas', 'Bodega', 'Locales', 'Edificio', 'Habitaciones', 'Hoteles', 'Fincas', 'Consultorios', 'Terrenos y Lotes'])

const selectPostType = (selection: 'isRenting' | 'isSelling') => {
  typeOfPost.value = selection
  isRentingOrSelling.value = false
  propertyOptionsSection.value = true
}

const handlePropertySelection = (propertyType: string) => {
  selectedPropertyType.value = propertyType
  propertyOptionsSection.value = false
  propertyDetails.value = true
}

const goBack = () => {
  if (propertyOptionsSection.value) {
    isRentingOrSelling.value = true
    propertyOptionsSection.value = false
  } else if (propertyDetails.value) {
    propertyOptionsSection.value = true
    propertyDetails.value = false
  }
}

const getPropertyIcon = (property: string | number) => {

  return {
    'Apartmentos': ApartmentColorSvg,
    'Casas': HouseColorSvg,
    'Bodega': WareHouseSvg,
    'Locales': ShopColorSvg,
    'Edificio': BuildingColorSvg,
    'Habitaciones': BedColorSvg,
    'Hoteles': HotelColorSvg,
    'Fincas': FincaColorSvg,
    'Consultorios': ConsultorioColorSvg,
    'Terrenos y Lotes': TerrenoColorSvg

  }[property] || null
}

const submitHandler = async (form: any) => {
  console.log('submit', form)

  // try {
  //   isFormSubmitting.value = true
  //   console.log('submit', form)
  // } catch (error) {
  //   console.log('error', error)
  // } finally {
  //   isFormSubmitting.value = false
  //   console.log('submit', form)
  // }
}



const onGetStepName = () => {
  switch (currentStep.value) {
    case 1:
      return 'propertyDetails'
    case 2:
      return 'propertyDimensions'
    case 3:
      return 'propertyFeatures'
    default:
      return ''
  }
}


const objectCompleted = (object: RealEstateTypes): boolean => {
  if (!object) return false
  console.log('object', object)
  return true
}

const nextStep = (value: RealEstateTypes) => {
  // if (!objectCompleted(value[onGetStepName()])) {
  //   next.value = false
  //   return
  // }

  if (currentStep.value < totalSteps) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    next.value = true
    currentStep.value--
  }
}

</script>

<template>

  <section v-if="isRentingOrSelling">
    <TitlePost title="¿Está buscando vender o arrendar su propiedad?" />
    <GoBack />

    <div class="rent-or-sell">
      <div class="ad-post-item" @click="selectPostType('isRenting')">
        <p>Arrendar</p>
        <div class="ad-post-svg">
          <HandWithKeySvg />
        </div>
      </div>

      <div class="ad-post-item" @click="selectPostType('isSelling')">
        <p>Vender</p>
        <div class="ad-post-svg">
          <ContractAgreeSvg />
        </div>
      </div>
    </div>

  </section>

  <section v-if="propertyOptionsSection">
    <TitlePost title="¿Qué tipo de inmueble es?" />
    <GoBack :goBack="goBack" />

    <div class="real-estate-options">
      <div v-for="property in propertyTypes" :key="property" class="ad-post-item"
        @click="handlePropertySelection(property)">
        <p>{{ property }}</p>
        <div class="ad-post-svg">
          <component :is="getPropertyIcon(property)" />
        </div>
      </div>
    </div>

  </section>

  <section v-if="propertyDetails">
    <TitlePost title="Empezemos describiendo el inmueble" />
    <GoBack :goBack="goBack" />

    <div class="real-estate-info">
      <FormKit type="form" id="property-form" #default="{ value, state }" @submit="submitHandler">

        <FormKit type="group" name="propertyDetails" v-if="currentStep === 1">

          <div class="grid-column">

            <div class="option">
              <label class="label" for="propertyAddress">Dirección</label>
              <FormKit type="text" name="propertyAddress" validation="required"
                placeholder="Incluye calle, número, comuna y ciudad." />
            </div>

            <div class="option">
              <label class="label" for="propertyTown">Barrio</label>
              <FormKit type="text" name="propertyTown" validation="required" placeholder="Belén" />
            </div>

          </div>

          <div class="grid-column">

            <div class="option">
              <label class="label" for="propertyState">Departamento</label>
              <FormKit type="text" name="propertyState" validation="required" placeholder="Antioquia" />
            </div>

            <div class="option">
              <label class="label" for="propertyCity">Municipio o ciudad</label>
              <FormKit type="text" name="propertyCity" validation="required" placeholder="Medellín" />
            </div>

          </div>

        </FormKit>

        <div class="form-action-buttons">
          <button class="btn-custom btn-cancel-previous" type="button" @click="previousStep" v-show="currentStep > 1">
            Atrás
          </button>

          <button class="btn-custom btn-next-submit" @click="nextStep(value as RealEstateTypes)"
            v-show="currentStep < totalSteps" :class="{ 'btn-disabled': !next }" type="button">
            Siguiente
          </button>

          <button class="btn-custom btn-next-submit" :class="{ 'btn-disabled': !state.valid }"
            v-show="currentStep === totalSteps" type="submit" :disabled="isFormSubmitting">
            Enviar
          </button>
        </div>

      </FormKit>

    </div>
  </section>

</template>