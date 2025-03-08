<script lang="ts" setup>
import './contact-form.scss'
import { AxiosError } from 'axios'
import { ref } from 'vue'
import { array, object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import { formatPrice, restrictNonDigits, formatPhoneNumber } from '~/components/organisms/ad-post/utils'
import ImageUploader from '~/components/organisms/ad-post/image-uploader.vue'

type PostType = {
  typeOfPost: string
  selectedPropertyType: string
}

const router = useRouter()
const param = ref<string | undefined>(undefined)

const { typeOfPost, selectedPropertyType } = defineProps<PostType>()

onMounted(() => {
  param.value = router.currentRoute.value.fullPath.substring('/publicar/'.length)
})

const schema = object({
  description: string().min(8, 'Debe tener al menos 8 caracteres').max(100, 'Debe tener menos de 100 caracteres').required('Requerido'),
  location: string().required('Requerido'),
  price: string().required('Requerido').min(4, 'Debe tener al menos 4 caracteres').max(13, 'Debe tener menos de 11 caracteres'),
  area: string().required('Requerido'),
  rooms: string().required('Requerido'),
  baths: string().required('Requerido'),
  parking: string(),
  utilityRooms: string(),
  phone: string().required('Requerido').min(10, 'Debe de tener 10 digitos').required('Required'),
  files: array()
    .of(
      object({
        file: object().required('El archivo es requerido'),
        url: string().nullable()
      })
    ).required('Requerido').min(1, 'al menos 1'),
  people: array().required('Requerido')
})

type Schema = InferType<typeof schema>

const state = reactive<{
  description: string | undefined
  location: string
  price: string
  area: string
  rooms: string
  baths: string
  parking: string
  utiliyRooms: string
  phone: string
  files: { file: File; url: string | undefined }[]
  people: string[]
}>({
  description: undefined,
  location: '',
  price: '',
  area: '',
  rooms: '',
  baths: '',
  parking: '',
  utiliyRooms: '',
  phone: '',
  files: [],
  people: ['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer'],
})

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

watch(() => state.files, (newValue) => {
  console.log(state.files)
  schema.validate(state.files)
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}

</script>

<template>
  <div class="contact-form">
    <div class="contact-form-inner">
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
              <UInputMenu v-model="state.location" :options="state.people" variant="none" searchable
                placeholder="Selecciona una ciudad">
                <template #option-empty="{ query }">
                  <q>{{ query }}</q> ciudad no encontrada
                </template>
              </UInputMenu>
            </UFormGroup>
          </div>
          <div class="form-group-input">
            <UFormGroup label="Precio" name="price">
              <UInput v-model="state.price" variant="none" placeholder="$ 1.000.000" inputmode="numeric" maxLength="13"
                @keypress="restrictNonDigits" />
            </UFormGroup>
          </div>
        </div>

        <div class="form-group-inline">
          <div class="form-group-input">
            <UFormGroup label="Metros cuadrados" name="area">
              <UInput v-model="state.area" variant="none" placeholder="50²" inputmode="numeric" maxLength="3"
                @keypress="restrictNonDigits" />
              <span class="absolute right-2 top-1/2 -translate-y-1/2">m²</span>
            </UFormGroup>
          </div>
          <div class="form-group-input">
            <UFormGroup label="Número de habitaciones" name="rooms">
              <UInput v-model="state.rooms" variant="none" placeholder="2" maxLength="1" inputmode="numeric"
                @keypress="restrictNonDigits" />
            </UFormGroup>
          </div>
        </div>

        <div class="form-group-inline">
          <div class="form-group-input">
            <UFormGroup label="Número de baños" name="baths">
              <UInput v-model="state.baths" variant="none" placeholder="2" maxLength="1" inputmode="numeric"
                @keypress="restrictNonDigits" />
            </UFormGroup>
          </div>
          <div class="form-group-input">
            <UFormGroup label="Número de parqueaderos" name="parking">
              <UInput v-model="state.parking" variant="none" placeholder="1" maxLength="1" inputmode="numeric"
                @keypress="restrictNonDigits" />
            </UFormGroup>
          </div>
        </div>

        <div class="form-group-inline">
          <div class="form-group-input">
            <UFormGroup label="Número de cuartos útiles" name="utiliyRooms">
              <UInput v-model="state.utiliyRooms" variant="none" placeholder="1" maxLength="1" inputmode="numeric"
                @keypress="restrictNonDigits" />
            </UFormGroup>
          </div>
          <div class="form-group-input">
            <UFormGroup label="Teléfono de contacto" name="phone">
              <UInput v-model="state.phone" variant="none" placeholder="301 123 4567" maxLength="12" inputmode="numeric"
                @keypress="restrictNonDigits" />
            </UFormGroup>
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

  </div>
</template>