<template>
  <section>
    <h2>Redirecto to {{ params['to'] }}</h2>

    <SpinnerUiverse :message="params['to'] as string" />
  </section>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import SpinnerUiverse from '@/shared/components/SpinnerUiverse.vue'
const { params } = useRoute()
</script>
