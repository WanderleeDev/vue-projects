<template>
  <v-card class="w-100" elevation="1">
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6">
          <div class="profile-field">
            <div class="mb-2 text-medium-emphasis">User Name</div>
            <div class="text-body-1">{{ username }}</div>
          </div>
        </v-col>

        <v-col cols="12" sm="6">
          <div class="profile-field">
            <div class="mb-2 text-medium-emphasis">Email Address</div>
            <div class="text-body-1">{{ email }}</div>
          </div>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col cols="12" sm="6">
          <div class="profile-field">
            <div class="mb-2 text-medium-emphasis">First Name</div>
            <div class="text-body-1">{{ firstName }}</div>
          </div>
        </v-col>

        <v-col cols="12" sm="6">
          <div class="profile-field">
            <div class="mb-2 text-medium-emphasis">Last Name</div>
            <div class="text-body-1">{{ lastName }}</div>
          </div>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col cols="12">
          <div class="profile-field">
            <div class="mb2 text-medium-emphasis">About Me</div>
            <div class="text-body-1">{{ about }}</div>
          </div>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col cols="12">
          <v-btn @click="handleEmit" block color="indigo" prepend-icon="mdi-pencil" size="large">
            EDIT
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type { ProfileBaseInfo } from '../schemas/Profile.schema'

defineProps<ProfileBaseInfo>()

const emit = defineEmits(['clicked'])
const handleEmit = () => emit('clicked', true)
</script>
