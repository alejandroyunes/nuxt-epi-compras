<script lang="ts" setup>
import { reset } from '@formkit/core'
import { AxiosError } from 'axios'
import { ref, watch } from 'vue'
import Button from '~/components/atoms/buttons/fill/index.vue'
import Loading from '~/components/atoms/loading/loading-icon/index.vue'
import imageUploader from '~/components/organisms/ad-post/image-uploader.vue'
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

    reset('contact-page')
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

</script>

<template>
  <div class="contact-form">

    <div class="contact-form-inner" v-if="true">

      <FormKit type="form" id="contact-page" #default="{ state }" @submit="submitHandler">
        <FormKit type="group" name="contact">

          <div class="form-group-textarea">
            <label for="title">Título</label>
            <FormKit type="textarea" name="title"
              placeholder="ejemplo: Amplio apartamento de 2 habitaciones en el centro de Bogotá" maxLength="85"
              v-model="title" validation="required" />
          </div>

          <div class="form-group-inline">
            <div class="form-group-input">
              <label for="location">Ciudad</label>
              <FormKit type="text" placeholder="Bogotá" maxLength="15" minLength="3" v-model="location" name="location"
                validation="required" />
            </div>

            <div class="form-group-input">
              <label for="price">Precio</label>
              <FormKit type="text" inputmode="numeric" maxLength="11" placeholder="$ 1.000.000" v-model="price"
                name="price" validation="required" oninput="this.value = this.value.replace(/\D/g, '')" />
            </div>
          </div>

          <div class="form-group-inline">
            <div class="form-group-input">
              <label for="area">Metros cuadrados</label>
              <FormKit type="text" inputmode="numeric" maxLength="4" placeholder="50²" v-model.number="area" name="area"
                validation="required" oninput="this.value = this.value.replace(/\D/g, '')" />
            </div>

            <div class="form-group-input">
              <label for="rooms">Número de habitaciones</label>
              <FormKit type="text" inputmode="numeric" maxLength="2" placeholder="2" v-model.number="rooms" name="rooms"
                validation="required" oninput="this.value = this.value.replace(/\D/g, '')" />
            </div>
          </div>

          <div class="form-group-inline">
            <div class="form-group-input">
              <label for="baths">Número de baños</label>
              <FormKit type="text" inputmode="numeric" maxLength="2" placeholder="2" v-model.number="baths" name="baths"
                validation="required" oninput="this.value = this.value.replace(/\D/g, '')" />
            </div>

            <div class="form-group-input">
              <label for="parking">Número de parqueaderos</label>
              <FormKit type="text" inputmode="numeric" maxLength="3" placeholder="1" v-model.number="parking"
                name="parking" validation="required" oninput="this.value = this.value.replace(/\D/g, '')" />
            </div>
          </div>

          <div class="form-group-inline">
            <div class="form-group-input">
              <label for="utilityRoom">Número de cuartos útiles</label>
              <FormKit type="text" inputmode="numeric" maxLength="2" placeholder="1" v-model.number="utilityRoom"
                name="utilityRoom" validation="required" oninput="this.value = this.value.replace(/\D/g, '')" />
            </div>

            <div class="form-group-input">
              <label for="phone">Teléfono de contacto</label>
              <FormKit type="text" inputmode="numeric" :maxLength="12" placeholder="301 123 4567" v-model="phone"
                name="phone" :validation="[['required'], ['matches', /^\d{3} \d{3} \d{4}$/]]"
                oninput="this.value = this.value.replace(/\D/g, '')" />
            </div>

          </div>

          <imageUploader v-model:files="files" />

          <div class="form-group-button">
            <Button :disabled="!state.valid && files.values.length !== 0" text="Publicar" type="submit" />
          </div>

        </FormKit>

      </FormKit>

    </div>

    <div v-else class="contact-form-info">

      <h3 v-show="isLoading" class="contact-form-title">Cargando...</h3>
      <p v-show="isLoading" class="contact-form-description">Cargando...</p>
      <Loading v-show="isLoading" />

      <h3 v-show="isSuccess" class="contact-form-title">Mensaje enviado</h3>
      <p v-show="isSuccess" class="contact-form-description">Gracias por contactarnos, en breve nos pondremos en
        contacto contigo.</p>

      <h3 v-show="isResponseError" class="contact-form-title">Error</h3>
      <p v-show="isResponseError" class="contact-form-description">Hubo un error al enviar el mensaje, por favor intenta
        de nuevo.</p>

      <h3 v-show="isRequestError" class="contact-form-title">Error</h3>
      <p v-show="isRequestError" class="contact-form-description">Hubo un error al enviar el mensaje, por favor intenta
        de nuevo.</p>

      <Button v-show="!isLoading && !isSuccess" text="Cerrar" @click="isConfirmInfoVisible = false" />

    </div>

  </div>
</template>
