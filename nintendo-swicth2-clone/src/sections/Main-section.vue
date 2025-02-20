<template>
  <main class="bg-main">
    <h1 class="sr-only">Introducing the Nintendo Switch 2</h1>
    <EntrySection />
    <CommonVideo :video="VIDEO" class="h-[100.4vw] md:h-[56.23vw]" />
    <InfoSection />
    <AnnouncementSection />
    <NintendoEvent />
    <TrailerSwitch />
    <FooterPage />
  </main>
</template>

<script lang="ts" setup>
import EntrySection from './Entry-section.vue'
import CommonVideo from '@/components/Common-video.vue'
import InfoSection from './Info-section.vue'
import AnnouncementSection from './Announcement-section.vue'
import NintendoEvent from './Nintendo-event.vue'
import TrailerSwitch from './Trailer-switch.vue'
import FooterPage from './Footer-page.vue'
import { ref } from 'vue'

const VIDEO = ref('https://www.nintendo.com/successor/assets/img/bg-movie.mp4')
</script>
