<script lang="ts" setup>
import { AxiosError } from 'axios'
import { ref } from 'vue'
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
import './contact-form.scss'

type PostType = {
  typeOfPost: string
  selectedPropertyType: string
}

const router = useRouter()
const param = ref<string | undefined>(undefined)
const { typeOfPost, selectedPropertyType } = defineProps<PostType>()
const files = ref<{ file: File, url: string | undefined }[]>([])

const cities = ref([
  'Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Bucaramanga', 'Pereira', 'Manizales', 'Santa Marta', 'Ibagué'
])

const isResponseError = ref(false)
const isRequestError = ref(false)
const isSuccess = ref(false)
const isLoading = ref(false)
const isConfirmInfoVisible = ref(false)


watchEffect(() => {
  console.log(files.value)
})

const submitHandler = async (createForm: any) => {
  isLoading.value = true
  isConfirmInfoVisible.value = true

  try {
    isSuccess.value = false
    isRequestError.value = false
    isResponseError.value = false

    // Uncomment and implement your API call here
    const { contact } = createForm
    // await formPost(contact)

    isLoading.value = false
    isSuccess.value = true

  } catch (error) {
    isLoading.value = false

    const axiosError = error as AxiosError<Error>
    if (axiosError.response) {
      isResponseError.value = true
    } else if (axiosError.request) {
      isRequestError.value = true
    }
  }

  isLoading.value = false
}

onMounted(() => {
  param.value = router.currentRoute.value.fullPath.substring('/publicar/'.length)
})

const schema = object({
  description: string().min(8, 'Debe tener al menos 8 caracteres').max(100, 'Debe tener menos de 100 caracteres').required('Requerido'),
  location: string().min(8, 'Must be at least 8 characters').required('Required'),
  price: string().required('Requerido').min(4, 'Debe tener al menos 4 caracteres').max(11, 'Debe tener menos de 11 caracteres'),
  area: string().required('Requerido'),
  rooms: string().required('Requerido'),
  baths: string().required('Requerido'),
  parking: string(),
  utilityRooms: string(),
  phone: string().required('Requerido').min(10, 'Debe de tener 10 digitos').required('Required'),
})

type Schema = InferType<typeof schema>

const state = reactive({
  description: undefined,
  location: undefined,
  price: '',
  area: '',
  rooms: '',
  baths: '',
  parking: '',
  utiliyRooms: '',
  phone: ''
})

const formatPrice = (value: string | undefined): string => {
  if (!value) return ''

  const numericValue = value.replace(/\D/g, '')
  if (numericValue === '') return ''

  return Number(numericValue).toLocaleString('es-CO') // 'es-CO' for Colombian locale, adjust as needed
}

watch(() => state.price, (newValue) => {
  const formatted = formatPrice(newValue)

  if (formatted !== newValue) {
    if (newValue.length > 11) {
      newValue = newValue.slice(0, 11);
    }
    state.price = formatted
  }
})

const formatArea = (value: string | number | undefined): string => {
  if (!value && value !== 0) return ''
  const stringValue = String(value)
  const numericValue = stringValue.replace(/\D/g, '')
  if (numericValue === '') return ''
  return `${numericValue}²`
}

watch(() => state.area, (newValue) => {
  const formatted = formatArea(newValue)
  if (formatted !== newValue) {
    state.area = formatted
  }
})

const formatPhoneNumber = (value: string | undefined): string => {
  if (!value) return '' // Handle undefined or empty input

  const cleanedValue = value.replace(/\D/g, '') // Remove non-digits
  if (cleanedValue.length > 10) return state.phone || '' // Return current phone value if over max length

  let formattedValue = cleanedValue
  if (cleanedValue.length > 6) {
    formattedValue = `${cleanedValue.slice(0, 3)} ${cleanedValue.slice(3, 6)} ${cleanedValue.slice(6)}`
  } else if (cleanedValue.length > 3) {
    formattedValue = `${cleanedValue.slice(0, 3)} ${cleanedValue.slice(3)}`
  }
  return formattedValue
}

watch(() => state.phone, (newValue) => {
  const formatted = formatPhoneNumber(newValue)
  if (formatted !== newValue) {
    state.phone = formatted
  }
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
              placeholder="Ejemplo: Amplio apartamento de 2 habitaciones en el centro de Bogotá" />
          </UFormGroup>
        </div>

        <div class="form-group-inline">
          <div class="form-group-input">
            <UFormGroup label="Ciudad" name="location">
              <UInput v-model="state.location" type="location" variant="none" placeholder="Bogotá" />
            </UFormGroup>
          </div>
          <div class="form-group-input">
            <UFormGroup label="Precio" name="price">
              <UInput v-model="state.price" variant="none" placeholder="$ 1.000.000" inputmode="numeric" maxLength="11"
                oninput="this.value = this.value.replace(/\D/g, '')" />
            </UFormGroup>
          </div>
        </div>

        <div class="form-group-inline">
          <div class="form-group-input">
            <UFormGroup label="Metros cuadrados" name="area">
              <UInput v-model="state.area" variant="none" placeholder="50²" maxLength="4" inputmode="numeric"
                oninput="this.value = this.value.replace(/\D/g, '')" />
            </UFormGroup>
          </div>
          <div class="form-group-input">
            <UFormGroup label="Número de habitaciones" name="rooms">
              <UInput v-model="state.rooms" variant="none" placeholder="2" maxLength="1" inputmode="numeric"
                oninput="this.value = this.value.replace(/\D/g, '')" />
            </UFormGroup>
          </div>
        </div>

        <div class="form-group-inline">
          <div class="form-group-input">
            <UFormGroup label="Número de baños" name="baths">
              <UInput v-model="state.baths" variant="none" placeholder="2" maxLength="1" inputmode="numeric"
                oninput="this.value = this.value.replace(/\D/g, '')" />
            </UFormGroup>
          </div>
          <div class="form-group-input">
            <UFormGroup label="Número de parqueaderos" name="parking">
              <UInput v-model="state.parking" variant="none" placeholder="1" maxLength="1" inputmode="numeric"
                oninput="this.value = this.value.replace(/\D/g, '')" />
            </UFormGroup>
          </div>
        </div>

        <div class="form-group-inline">
          <div class="form-group-input">
            <UFormGroup label="Número de cuartos útiles" name="utiliyRooms">
              <UInput v-model="state.utiliyRooms" variant="none" placeholder="1" maxLength="1" inputmode="numeric"
                oninput="this.value = this.value.replace(/\D/g, '')" />
            </UFormGroup>
          </div>
          <div class="form-group-input">
            <UFormGroup label="Teléfono de contacto" name="phone">
              <UInput v-model="state.phone" variant="none" placeholder="301 123 4567" maxLength="12" inputmode="numeric"
                oninput="this.value = this.value.replace(/\D/g, '')" />
            </UFormGroup>
          </div>
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