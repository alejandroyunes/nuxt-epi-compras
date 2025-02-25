<script setup lang="ts">
import { ref, watchEffect } from 'vue'

import ContractAgreeSvg from '~/components/icons/ad-post/real-estate/rental-or-sell/ContractAgreeSvg.vue'
import HandWithKeySvg from '~/components/icons/ad-post//real-estate/rental-or-sell/HandWithKeySvg.vue'
import ApartmentColorSvg from '~/components/icons/ad-post//real-estate/type-of-property/ApartmentColorSvg.vue'
import BedColorSvg from '~/components/icons/ad-post//real-estate/type-of-property/BedColorSvg.vue'
import BuildingColorSvg from '~/components/icons/ad-post//real-estate/type-of-property/BuildingColorSvg.vue'
import ConsultorioColorSvg from '~/components/icons/ad-post//real-estate/type-of-property/ConsultorioColorSvg.vue'
import FincaColorSvg from '~/components/icons/ad-post//real-estate/type-of-property/FincaColorSvg.vue'
import HotelColorSvg from '~/components/icons/ad-post//real-estate/type-of-property/HotelColorSvg.vue'
import ShopColorSvg from '~/components/icons/ad-post//real-estate/type-of-property/ShopColorSvg.vue'
import TerrenoColorSvg from '~/components/icons/ad-post//real-estate/type-of-property/TerrenoColorSvg.vue'
import WareHouseSvg from '~/components/icons/ad-post//real-estate/type-of-property/WareHouseSvg.vue'
import HouseColorSvg from '~/components/icons/ad-post//real-estate/type-of-property/HouseColorSvg.vue'
import TitlePost from './title-post.vue'
import GoBack from './go-back.vue'
import ContactForm from '~/components/organisms/ad-post/contact-form/contact-form.vue'

const isRentingOrSelling = ref(true)
const isTypeOfProperySelected = ref(false)
const isFormDetails = ref(false)

const typeOfPost = ref<'isRenting' | 'isSelling' | undefined>(undefined)
const selectedPropertyType = ref<string | undefined>(undefined)
const propertyTypes = ref(['Apartmentos', 'Casas', 'Bodega', 'Locales', 'Edificio', 'Habitaciones', 'Hoteles', 'Fincas', 'Consultorios', 'Terrenos y Lotes'])

const selectPostType = (selection: 'isRenting' | 'isSelling') => {
  typeOfPost.value = selection
  isRentingOrSelling.value = false
  isTypeOfProperySelected.value = true
}

const handlePropertySelection = (propertyType: string) => {
  selectedPropertyType.value = propertyType
  isTypeOfProperySelected.value = false
  isFormDetails.value = true
}

const goBackFirstStep = () => {
  if (isTypeOfProperySelected.value) {
    isRentingOrSelling.value = true
    isTypeOfProperySelected.value = false
  } else if (isFormDetails.value) {
    isTypeOfProperySelected.value = true
    isFormDetails.value = false
  }
}

const goBackSecondStep = () => {
  if (isFormDetails.value) {
    isTypeOfProperySelected.value = true
    isFormDetails.value = false
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


watchEffect(() => {
  console.log(typeOfPost.value)
  console.log(selectedPropertyType.value)
})

</script>

<template>

  <section v-if="isRentingOrSelling">
    <TitlePost title="¿Está buscando vender o arrendar su propiedad?" />
    <GoBack :goBackUrl="'/publicar'" />

    <div class="rent-or-sell">
      <div class="item" @click="selectPostType('isRenting')">
        <p>Arrendar</p>
        <div class="ad-post-svg">
          <HandWithKeySvg />
        </div>
      </div>

      <div class="item" @click="selectPostType('isSelling')">
        <p>Vender</p>
        <div class="ad-post-svg">
          <ContractAgreeSvg />
        </div>
      </div>
    </div>
  </section>

  <section v-if="isTypeOfProperySelected">
    <TitlePost title="¿Qué tipo de inmueble es?" />
    <GoBack :goBack="goBackFirstStep" />

    <div class="type-of-property">
      <div v-for="property in propertyTypes" :key="property" class="item" @click="handlePropertySelection(property)">
        <p>{{ property }}</p>
        <div class="ad-post-svg">
          <component :is="getPropertyIcon(property)" />
        </div>
      </div>
    </div>

  </section>

  <section v-if="isFormDetails">
    <TitlePost title="Empezemos describiendo el inmueble" />
    <GoBack :goBack="goBackSecondStep" />
    <ContactForm />
  </section>
</template>


<style lang="scss" scoped>
.rent-or-sell {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 20px;
  max-width: var(--max-width);
  margin: 20px auto 0;
}

.type-of-property {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  max-width: var(--max-width);
  margin: 20px auto 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
}

.form-details {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 24px auto 0;


  .formkit-form {
    // display: none;
    // border: 1px solid red;
    // outline: 1px solid red;

    .formkit-messages {
      list-style-type: none;
      color: var(--warning);
    }

    .label {
      color: var(--heading);
      font-size: 1rem;
    }

    input {
      margin-top: 6px;
      height: 40px;
      border-radius: 12px;
      padding: 10px;
      border: none;
      outline: 1px solid var(--border);
      width: 100%;
      background-color: transparent;
      color: var(--heading);
      font-size: 1.2rem;
      outline: 10px solid red;

      &:focus {
        outline: 1px solid var(--primary);
      }

      &::placeholder {
        color: var(--text);
        font-size: 1rem;
      }
    }
  }


  .grid-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 28px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .option {
      position: relative;

      .formkit-messages {
        position: absolute;
        top: 70px;
        background: transparent;
        list-style-type: none;
        left: -29px;
        color: var(--warning);
      }
    }
  }

  .grid-column:first-of-type {
    margin-top: 20px;
  }

  .form-action-buttons {
    display: flex;
    justify-content: center;
    margin: 20px 0 12px;
    width: 100%;
    max-width: 830px;
    gap: 28px;

    .btn-disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    .btn-custom {
      width: 100%;
      height: 50px;
      font-size: 15px;
      border-radius: 5px;
      font-weight: 700;
      margin-top: 30px;
      cursor: pointer;
      background-color: var(--primary);
    }

    .btn-cancel-previous {
      border: 1px solid var(--primary);
      background-color: transparent;
      color: var(--color-heading);
    }

    .btn-next-submit {
      border: none;
      color: white;
    }
  }
}

//shared
.item {
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: var(--text);
    font-size: 1.125rem;
    font-weight: 600;
  }
}

.ad-post-svg {
  width: 180px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  border: 1px solid var(--primary);
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      background-color: var(--primary);
    }
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 100px;
  }
}
</style>