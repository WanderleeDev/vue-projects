<script setup lang="ts">
import ModalCodeViewer from '@/shared/ui/ModalCodeViewer.vue'
import { task, resolution } from '@/data/maxRepeatValue'
</script>

<template>
  <div class="about">
    <VCodeBlock class="max-w-4xl" :code="task" />
    <ModalCodeViewer :code="resolution" />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
