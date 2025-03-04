<script lang="ts" setup>
import { AxiosError } from 'axios'
import { ref, watch } from 'vue'
import './contact-form.scss'


type PostType = {
  typeOfPost: string
  selectedPropertyType: string
}

const router = useRouter()
const param = ref<string | undefined>(undefined)
const { typeOfPost, selectedPropertyType } = defineProps<PostType>()

const title = ref('')
const location = ref('')
const price = ref<string | undefined>(undefined)
const rooms = ref<string | undefined>(undefined)
const baths = ref<string | undefined>(undefined)
const area = ref<string | undefined>(undefined)
const parking = ref<string | undefined>(undefined)
const utilityRoom = ref<string | undefined>(undefined)
const phone = ref<string | undefined>(undefined)
const files = ref<{ file: File, url: string | undefined }[]>([])

const cities = ref([
  'Bogotá', 'Medellín', 'Cali', 'Barranquilla', 'Cartagena', 'Bucaramanga', 'Pereira', 'Manizales', 'Santa Marta', 'Ibagué'
])

const isResponseError = ref(false)
const isRequestError = ref(false)
const isSuccess = ref(false)
const isLoading = ref(false)
const isConfirmInfoVisible = ref(false)

const formatPhoneNumber = (value: string | undefined): string => {
  if (!value) return '' // Handle undefined or empty input

  const cleanedValue = value.replace(/\D/g, '') // Remove non-digits
  if (cleanedValue.length > 10) return phone.value || '' // Return current phone value if over max length

  let formattedValue = cleanedValue
  if (cleanedValue.length > 6) {
    formattedValue = `${cleanedValue.slice(0, 3)} ${cleanedValue.slice(3, 6)} ${cleanedValue.slice(6)}`
  } else if (cleanedValue.length > 3) {
    formattedValue = `${cleanedValue.slice(0, 3)} ${cleanedValue.slice(3)}`
  }
  return formattedValue
}

watch(phone, (newValue) => {
  const formatted = formatPhoneNumber(newValue)
  if (formatted !== newValue) {
    phone.value = formatted
  }
})

const formatPrice = (value: string | undefined): string => {
  if (!value) return '' // Handle undefined or empty input

  const numericValue = value.replace(/\D/g, '') // Remove non-digits
  if (numericValue === '') return '' // Return empty string if no digits

  // Format with thousand separators
  return Number(numericValue).toLocaleString('es-CO') // 'es-CO' for Colombian locale, adjust as needed
}

watch(price, (newValue) => {
  const formatted = formatPrice(newValue)
  if (formatted !== newValue) {
    price.value = formatted
  }
})

const formatArea = (value: string | number | undefined): string => {
  if (!value && value !== 0) return ''
  const stringValue = String(value)
  const numericValue = stringValue.replace(/\D/g, '')
  if (numericValue === '') return ''
  return `${numericValue}²`
}

watch(area, (newValue) => {
  const formatted = formatArea(newValue)
  if (formatted !== newValue) {
    area.value = formatted
  }
})

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

import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}
</script>

<template>
  <div class="contact-form">
    <div class="contact-form-inner">
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <UButton type="submit">
          Submit
        </UButton>
      </UForm>
    </div>

  </div>
</template>
