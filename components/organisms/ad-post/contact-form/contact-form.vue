<script lang="ts" setup>
import './contact-form.scss'
import { AxiosError } from 'axios'
import { ref, reactive, watch, onMounted } from 'vue'
import { array, object, string, mixed, boolean, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import { formatPrice, restrictNonDigits, formatPhoneNumber } from '~/components/organisms/ad-post/utils'
import ImageUploader from '~/components/organisms/ad-post/image-uploader.vue'
import Checkbox from '~/components/atoms/checkbox.vue'
import Posting from '~/components/atoms/posting.vue'

type PostType = {
  typeOfPost: string
  selectedPropertyType: string
}

const router = useRouter()
const param = ref<string | undefined>(undefined)
const loading = ref<boolean>(false)

const { typeOfPost, selectedPropertyType } = defineProps<PostType>()

onMounted(() => {
  param.value = router.currentRoute.value.fullPath.substring('/publicar/'.length)
  loadSavedState()
})

const schema = object({
  description: string().min(8, 'Debe tener al menos 8 caracteres').max(100, 'Debe tener menos de 100 caracteres').required('Requerido'),
  location: string().required('Requerido'),
  town: string().min(3, 'Debe tener al menos 3 caracteres').max(20, 'Debe tener menos de 20 caracteres').required('Requerido'),
  price: string().min(7, 'Debe tener al menos 4 caracteres').max(13, 'Debe tener menos de 11 caracteres').required('Requerido'),
  area: string().required('Requerido'),
  rooms: string().required('Requerido'),
  baths: string().required('Requerido'),
  parking: string(),
  utilityRooms: string(),
  patio: boolean().required('Requerido'),
  balcony: boolean(),
  elevator: boolean(),
  pool: boolean(),
  gym: boolean(),
  security: boolean(),
  socialArea: boolean(),
  phone: string().min(12, 'Debe de tener 10 digitos').max(12, 'Debe de tener 10 digitos').required('Required'),
  files: array().of(
    object({
      file: mixed<File>().test(
        'fileType',
        'El archivo debe ser una imagen válida',
        (value: unknown) => !value || value instanceof File // Allow null or valid File
      ),
      url: string().nullable()
    })
  ).min(1, 'Debe subir al menos una imagen').max(3, 'No puede subir más de 3 imágenes'),
})

type Schema = InferType<typeof schema>

const cities = ['Bogotá',
  'Medellín',
  'Cali',
  'Barranquilla',
  'Cartagena',
  'Santa Marta',
  'Manizales',
  'Pereira',
  'Cúcuta',
  'Ibagué',
  'Neiva',
  'Villavicencio',
  'Bucaramanga',
  'Pasto',
  'Popayán',
  'Armenia',
  'Montería',
  'Sincelejo',
  'Valledupar',
  'Tunja',
  'Riohacha',
  'Quibdó',
  'Florencia',
  'Yopal',
  'Mocoa',
  'Puerto Carreño',
  'San José del Guaviare',
  'Inírida',
  'Mitú',
  'Leticia']

const initialState = {
  description: undefined,
  location: '',
  town: '',
  price: '',
  area: '',
  rooms: '',
  baths: '',
  parking: '',
  utiliyRooms: '',
  patio: false,
  balcony: false,
  elevator: false,
  pool: false,
  gym: false,
  security: false,
  socialArea: false,
  phone: '',
  files: [],
}

const state = reactive<{
  description: string | undefined
  location: string
  town: string
  price: string
  area: string
  rooms: string
  baths: string
  parking: string
  utiliyRooms: string
  patio: boolean
  balcony: boolean
  elevator: boolean
  pool: boolean
  gym: boolean
  security: boolean
  socialArea: boolean
  phone: string
  files: { file: File; url: string | undefined }[]
}>({ ...initialState })

watch(() => state.price, (newValue) => {
  const formatted = formatPrice(newValue)

  if (formatted !== newValue) {
    state.price = formatted
  }
})

watch(() => state.phone, (newValue) => {

  const formatted = formatPhoneNumber(newValue)

  if (formatted !== newValue) {
    state.phone = formatted
  }

})

watch(() => {
  const { files, ...stateWithoutFiles } = state
  return stateWithoutFiles
}, (newStateWithoutFiles) => {
  localStorage.setItem('formState', JSON.stringify(newStateWithoutFiles))
}, { deep: true })

function loadSavedState() {
  const savedState = localStorage.getItem('formState')
  if (savedState) {
    const parsedState = JSON.parse(savedState)
    Object.assign(state, { ...parsedState, files: [] })
  }
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true

  const loggedData = JSON.parse(JSON.stringify(event.data))
  console.log('Initial data:', loggedData, typeOfPost, selectedPropertyType, param.value)

  setTimeout(() => {
    loading.value = false
    Object.assign(state, { ...initialState })
    console.log('Data after reset:', loggedData, typeOfPost, selectedPropertyType, param.value)
  }, 2000)
}
</script>

<template>

  <div class="contact-form">
    <div v-if="!loading" class="contact-form-inner">
      <UForm :schema="schema" :state="state" @submit="onSubmit">

        <div class="form-group-textarea">
          <UFormGroup label="Descripción" name="description">
            <UTextarea v-model="state.description" variant="none"
              placeholder="Ejemplo: Apartamento a 2 minutos de estación de metro con parqueadero amplio" />
          </UFormGroup>
        </div>

        <div class="form-group-inline">
          <div class="form-group-dropdown">
            <UFormGroup label="Ciudad" name="location">
              <UInputMenu v-model="state.location" :options="cities" variant="none" searchable
                placeholder="Selecciona una ciudad">
                <template #option-empty="{ query }">
                  <q>{{ query }}</q> ciudad no encontrada
                </template>
              </UInputMenu>
            </UFormGroup>
          </div>
          <div class="form-group-input">
            <UFormGroup label="Barrio" name="town">
              <UInput v-model="state.town" variant="none" placeholder="Engativá" maxLength="20" />
            </UFormGroup>
          </div>
        </div>

        <div class="form-group-inline">
          <div class="form-group-input">
            <UFormGroup label="Precio" name="price">
              <UInput v-model="state.price" variant="none" placeholder="$ 1.000.000" inputmode="numeric" minLength="4"
                maxLength="13" @keypress="restrictNonDigits" />
            </UFormGroup>

          </div>
          <div class="form-group-input">
            <UFormGroup label="Metros cuadrados" name="area">
              <UInput v-model="state.area" variant="none" placeholder="50²" inputmode="numeric" maxLength="4"
                @keypress="restrictNonDigits" />
              <span class="absolute right-2 top-1/2 -translate-y-1/2">m²</span>
            </UFormGroup>
          </div>
        </div>

        <div class="form-group-inline">
          <div class="form-group-input">
            <UFormGroup label="Número de habitaciones" name="rooms">
              <UInput v-model="state.rooms" variant="none" placeholder="2" maxLength="1" inputmode="numeric"
                @keypress="restrictNonDigits" />
            </UFormGroup>

          </div>
          <div class="form-group-input">
            <UFormGroup label="Número de baños" name="baths">
              <UInput v-model="state.baths" variant="none" placeholder="2" maxLength="1" inputmode="numeric"
                @keypress="restrictNonDigits" />
            </UFormGroup>

          </div>
        </div>

        <div class="form-group-inline">
          <div class="form-group-input">
            <UFormGroup label="Número de parqueaderos" name="parking">
              <UInput v-model="state.parking" variant="none" placeholder="1" maxLength="1" inputmode="numeric"
                @keypress="restrictNonDigits" />
            </UFormGroup>
          </div>
          <div class="form-group-input">
            <UFormGroup label="Número de cuartos útiles" name="utiliyRooms">
              <UInput v-model="state.utiliyRooms" variant="none" placeholder="1" maxLength="1" inputmode="numeric"
                @keypress="restrictNonDigits" />
            </UFormGroup>

          </div>
        </div>

        <div class="form-group-inline">
          <div class="form-group-input">
            <UFormGroup label="Teléfono de contacto" name="phone">
              <UInput v-model="state.phone" variant="none" placeholder="301 123 4567" inputmode="numeric" maxLength="12"
                @keypress="restrictNonDigits" />
            </UFormGroup>
          </div>
          <div class="form-group-input">
          </div>
        </div>

        <div class="form-group-checkbox">
          <div class="form-group-item">
            <Checkbox v-model="state.security" label="Portería" name="Portería" />
          </div>
          <div class="form-group-item">
            <Checkbox v-model="state.balcony" label="Balcón" name="balcony" />
          </div>
          <div class="form-group-item">
            <Checkbox v-model="state.elevator" label="Ascensor" name="elevator" />
          </div>
          <div class="form-group-item">
            <Checkbox v-model="state.gym" label="Gym" name="gym" />
          </div>
          <div class="form-group-item">
            <Checkbox v-model="state.pool" label="Piscina" name="Piscina" />
          </div>
          <div class="form-group-item">
            <Checkbox v-model="state.socialArea" label="Área social" name="Área social" />
          </div>
          <div class="form-group-item">
            <Checkbox v-model="state.patio" label="Patio" name="patio" />
          </div>
        </div>

        <div class="form-group-image">
          <UFormGroup name="files">
            <ImageUploader v-model:files="state.files" />
          </UFormGroup>
        </div>

        <div class="form-group-button">
          <UButton type="submit">
            Publicar
          </UButton>
        </div>

      </UForm>
    </div>

    <div v-else class="form-submit">
      <h1>Publicando...</h1>
      <Posting />
    </div>

  </div>

</template>