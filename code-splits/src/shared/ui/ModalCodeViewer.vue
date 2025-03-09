<template>
  <BaseDialog text-btn="View Code" :closable="true">
    <VCodeBlock :code="code" class="max-w-4xl w-full" />
  </BaseDialog>
</template>

<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block'
import BaseDialog from '../components/BaseDialog.vue'

defineProps<{ code: string }>()
</script>
