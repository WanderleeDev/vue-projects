<template>
  <v-container class="pa-0">
    <v-row>
      <v-col cols="12" order="1" order-md="0" md="8">
        <!-- <ProfileInfo v-if="!hasEditModeActive" @clicked="handleClicked" /> -->
        <!-- <AsyncFormEditUser v-else @clicked="handleClicked" v-bind="userStore.$state" /> -->
      </v-col>

      <v-col cols="12" order="0" order-md="1" md="4">
        <!-- <ProfileCard v-bind="userStore.$state" /> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
// import ProfileCard from '../components/ProfileCard.vue'
import ProfileInfo from '../components/ProfileInfo.vue'
import { useProfileStore } from '../store'

const userStore = useProfileStore()
// const AsyncFormEditUser = defineAsyncComponent(() => import('../components/FormEditUser.vue'))
const hasEditModeActive = ref(false)

function handleClicked(isClicked: boolean) {
  hasEditModeActive.value = Boolean(isClicked)
}
</script>

<style></style>
