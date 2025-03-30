<template>
  <section class="flex flex-col gap-8">
    <h2 class="text-2xl font-bold flex items-center gap-2">
      <v-icon icon="mdi-folder-multiple-image" class="opacity-80" />
      Select your favorite background image
    </h2>
    <div class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      <v-btn
        class="group overflow-hidden mx-auto"
        v-for="(image, i) in images"
        @click="updateImage(image)"
        height="200"
        width="250"
        :key="image"
        :title="`Apply image ${i + 1}`"
      >
        <v-img
          class="group-hover:scale-125 transition-all duration-300"
          :src="image"
          :alt="`Background image ${i + 1}`"
          height="200"
          width="250"
          cover
        >
          <div class="fill-height bottom-gradient"></div>
        </v-img>
      </v-btn>
    </div>
    <ImageUploader />
  </section>
</template>

<script lang="ts" setup>
import ImageUploader from '../components/ImageUploader.vue'
import { useSettingStore } from '../store'

const settingStore = useSettingStore()
const images = [
  'https://res.cloudinary.com/dy8gpozi6/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731553760/background6_c84sqk.webp',
  'https://res.cloudinary.com/dy8gpozi6/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731553822/background4_oa6osl.webp',
  'https://res.cloudinary.com/dy8gpozi6/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731553763/background10_kamtdl.webp',
  'https://res.cloudinary.com/dy8gpozi6/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731553762/background9_edu9hx.webp',
  'https://res.cloudinary.com/dy8gpozi6/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731553759/background5_sgtqm2.webp',
  'https://res.cloudinary.com/dy8gpozi6/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731553761/background7_nswkou.webp',
  'https://res.cloudinary.com/dy8gpozi6/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731553764/background11_uyfy8o.webp',
  'https://res.cloudinary.com/dy8gpozi6/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1731553762/background8_y1qfwe.webp',
  'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
]

const updateImage = (img: string) => (settingStore.backgroundImage = img)
</script>
