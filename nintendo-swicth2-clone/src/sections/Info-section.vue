<template>
  <section
    class="relative h-[113.34vw] md:h-[82.32vw] lg:h-[70.22vw] xl:h-[52.57vw] bg-black overflow-clip"
  >
    <picture class="absolute h-full w-full scroll-opacity">
      <source
        v-for="(url, index) in bgImages"
        :key="url"
        :media="MediaQueries[index]"
        :srcset="url"
      />
      <img class="w-full h-full mx-auto" :src="bgImages[0]" alt="background image" loading="lazy" />
    </picture>

    <div
      class="flex justify-center items-center flex-col gap-[7vw] md:gap-10 pt-[11vw] md:py-20 relative z-10 px-6 sm:px-16 xl:gap-16"
    >
      <picture>
        <source
          v-for="(url, i) in messageImages"
          :key="url"
          :media="MediaQueries[i]"
          :srcset="url"
        />
        <img
          class="mx-auto sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl"
          :src="messageImages[0]"
          alt="You can play Nintendo Switch 2 exclusive games, as well as Nintendo Switch games, on Nintendo Switch 2."
          loading="lazy"
        />
      </picture>
      <div
        class="font-normal flex justify-items-center items-start flex-col max-w-5xl md:items-center"
      >
        <p
          class="text-[2.3vw] text-left md:text-center white sm:text-[15px]"
          v-for="(paragraph, i) in paragraphs"
          :key="i"
        >
          {{ i === 0 ? '*' : '' }} {{ paragraph }}
        </p>
      </div>
    </div>
    <div class="bg-console scroll-opacity"></div>
  </section>
</template>

<script lang="ts" setup>
const MediaQueries: Record<number, string> = {
  0: '(min-width: 1025px)',
  1: '(min-width: 760px) and (max-width: 1024.98px)',
  2: '(max-width: 759.98px)',
}

const bgImages = [
  'https://www.nintendo.com/successor/assets/img/en-us/l-about-bg.webp',
  'https://www.nintendo.com/successor/assets/img/en-us/l-about-bg-tab.webp',
  'https://www.nintendo.com/successor/assets/img/en-us/l-about-bg-sp.webp',
]

const messageImages = [
  'https://www.nintendo.com/successor/assets/img/en-us/l-about-contents-title.svg',
  'https://www.nintendo.com/successor/assets/img/en-us/l-about-contents-title-tab.svg',
  'https://www.nintendo.com/successor/assets/img/en-us/l-about-contents-title-sp.svg',
]

const paragraphs = [
  'Nintendo Switch 2 plays both physical and digital Nintendo Switch games.',
  'Certain Nintendo Switch games may not be supported on or fully compatible with Nintendo Switch 2.',
  'Details will be shared on the Nintendo website at a later date.',
  'Nintendo Switch Online members can continue using the service on Nintendo Switch 2.',
]
</script>

<style scoped>
.bg-console {
  position: absolute;
  background-image: url(https://www.nintendo.com/successor/assets/img/l-about-inner-played-sp.webp);
  background-size: 100% auto;
  background-position: bottom;
  background-repeat: no-repeat;
  inset: 0;
  z-index: 10;

  @media (width >= 760px) {
    background-image: url(https://www.nintendo.com/successor/assets/img/l-about-inner-played-tab.webp);
  }

  @media (width >= 1025px) {
    background-image: url(https://www.nintendo.com/successor/assets/img/l-about-inner-played.webp);
  }
}

.scroll-opacity {
  opacity: 0;
  animation: 1s reveal linear both;
  animation-timeline: view(block);
  animation-range: cover 0% cover 50%;
}

@keyframes reveal {
  to {
    opacity: 1;
  }
}
</style>
