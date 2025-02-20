<template>
  <div
    class="relative before:absolute before:inset-0 before:bg-transparent before:z-10 before:select-none h-full"
  >
    <swiper-container
      class="h-full"
      effect="fade"
      :navigation="false"
      :autoplay
      :speed="2000"
      :autoplay-delay="5000"
      :loop="true"
    >
      <swiper-slide v-for="{ img, sources } in swiperSlides" :key="img.src">
        <picture>
          <source v-for="({ media, srcset }, i) in sources" :key="i" :media :srcset />
          <img class="w-full h-full" :src="img.src" :alt="img.alt" loading="lazy" />
        </picture>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<script lang="ts" setup>
const autoplay = true

const swiperSlides = [
  {
    sources: [
      {
        media: '(min-width: 760px)',
        srcset: 'https://www.nintendo.com/successor/assets/img/en-us/l-live-bg1.webp',
      },
      {
        media: '(max-width: 759.98px)',
        srcset: 'https://www.nintendo.com/successor/assets/img/en-us/l-live-bg1-sp.webp',
      },
    ],
    img: {
      src: 'https://www.nintendo.com/successor/assets/img/en-us/l-live-bg1.webp',
      alt: 'Nintendo Switch 2 Experience',
    },
  },
  {
    sources: [
      {
        media: '(min-width: 760px)',
        srcset: 'https://www.nintendo.com/successor/assets/img/en-us/l-live-bg2.webp',
      },
      {
        media: '(max-width: 759.98px)',
        srcset: 'https://www.nintendo.com/successor/assets/img/en-us/l-live-bg2-sp.webp',
      },
    ],
    img: {
      src: 'https://www.nintendo.com/successor/assets/img/en-us/l-live-bg2.webp',
      alt: 'Nintendo Switch 2 Experience',
    },
  },
  {
    sources: [
      {
        media: '(min-width: 760px)',
        srcset: 'https://www.nintendo.com/successor/assets/img/en-us/l-live-bg3.webp',
      },
      {
        media: '(max-width: 759.98px)',
        srcset: 'https://www.nintendo.com/successor/assets/img/en-us/l-live-bg3-sp.webp',
      },
    ],
    img: {
      src: 'https://www.nintendo.com/successor/assets/img/en-us/l-live-bg3.webp',
      alt: 'Nintendo Switch 2 Experience',
    },
  },
]
</script>
