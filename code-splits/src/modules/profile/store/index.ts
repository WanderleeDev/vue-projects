import { defineStore } from 'pinia'
import type { ProfileType } from '../schemas/Profile.schema'
import { NullProfile } from '../model/NullProfile'

const USER_ID = 'user'

export const useProfileStore = defineStore(USER_ID, {
  state: () => ({ ...NullProfile }),

  getters: {
    userAcronym: ({ firstName, lastName }) => `${firstName[0]}${lastName[0]}`,
  },

  actions: {
    updateUser(user: Partial<ProfileType>) {
      this.$patch(user)
    },

    resetUser() {
      this.$patch({ ...NullProfile })
    },
  },
})
