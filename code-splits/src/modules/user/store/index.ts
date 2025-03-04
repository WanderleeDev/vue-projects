import { defineStore } from 'pinia'

interface User {
  firstName: string
  lastName: string
  image: string | null
  nickname: string
}

export const useUserStore = defineStore('user', {
  state: (): User => ({
    firstName: 'Wanderlee Max',
    lastName: 'Gutierrez Gamboa',
    image: 'https://avatars.githubusercontent.com/u/116982723?v=4',
    nickname: 'edu',
  }),

  getters: {
    userAcronym: ({ firstName, lastName }) => `${firstName[0]}${lastName[0]}`,
  },

  actions: {
    updateUser(user: Partial<User>) {
      this.$patch(user)
    },
  },
})
