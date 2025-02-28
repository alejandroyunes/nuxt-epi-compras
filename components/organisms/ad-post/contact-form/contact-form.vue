<script lang="ts" setup>
import './contact-form.scss'
import { ref } from 'vue'
import { AxiosError } from 'axios'
import { reset } from '@formkit/core'
import Loading from '~/components/atoms/loading/loading-icon/index.vue'
import Button from '~/components/atoms/buttons/fill/index.vue'
import imageUploader from '~/components/organisms/ad-post/image-uploader.vue'

type PostType = {
  typeOfPost: string
  selectedPropertyType: string
}

const router = useRouter()
const param = ref<string | undefined>(undefined)
const { typeOfPost, selectedPropertyType } = defineProps<PostType>()

const title = ref('')
const location = ref('')
const price = ref()
const rooms = ref()
const baths = ref()
const area = ref()
const parking = ref()
const utilityRoom = ref()
const phone = ref()
const files = ref<{ file: File, url: string | undefined }[]>([])

const isResponseError = ref(true)
const isRequestError = ref(false)
const isSuccess = ref(false)
const isLoading = ref(false)
const isConfirmInfoVisible = ref(false)

const submitHandler = async (createForm: any) => {
  isLoading.value = true
  isConfirmInfoVisible.value = true

  try {
    isSuccess.value = false
    isRequestError.value = false
    isResponseError.value = false

    // const { contact } = createForm
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

watch(files.value, (newValue) => {
  console.log(newValue)
}, { deep: true })

watchEffect(() => {
  console.log(files.value)

})

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
              <FormKit type="text" inputmode="numeric" maxLength="7" placeholder="$ 1.000.000" v-model="price"
                name="price" validation="required" />
            </div>
          </div>

          <div class="form-group-inline">
            <div class="form-group-input">
              <label for="area">Metros cuadrados</label>
              <FormKit type="text" inputmode="numeric" maxLength="3" placeholder="50²" v-model.number="area" name="area"
                validation="required" />
            </div>

            <div class="form-group-input">
              <label for="rooms">Número de habitaciones</label>
              <FormKit type="text" inputmode="numeric" maxLength="3" placeholder="2" v-model.number="rooms" name="rooms"
                validation="required" />
            </div>
          </div>

          <div class="form-group-inline">
            <div class="form-group-input">
              <label for="baths">Número de baños</label>
              <FormKit type="text" inputmode="numeric" maxLength="3" placeholder="2" v-model.number="baths" name="baths"
                validation="required" />
            </div>

            <div class="form-group-input">
              <label for="parking">Número de parqueaderos</label>
              <FormKit type="text" inputmode="numeric" maxLength="3" placeholder="1" v-model.number="parking"
                name="parking" validation="required" />
            </div>
          </div>

          <div class="form-group-inline">
            <div class="form-group-input">
              <label for="utilityRoom">Número de cuartos útiles</label>
              <FormKit type="text" inputmode="numeric" maxLength="3" placeholder="1" v-model.number="utilityRoom" name="utilityRoom"
                validation="required" />
            </div>

            <div class="form-group-input">
              <label for="phone">Teléfono de contacto</label>
              <FormKit type="text" inputmode="numeric" maxLength="10" placeholder="304 123 4567" v-model.number="phone"
                name="phone" validation="required" />
            </div>

          </div>

          <imageUploader v-model:files="files" />

          <div class="form-group-button">
            <Button :disabled="!state.valid" text="Publicar" type="submit" />
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
