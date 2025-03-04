<template>
  <v-parallax :src>
    <slot />
  </v-parallax>
</template>

<script lang="ts" setup>
defineProps<{ src: string }>()
</script>
