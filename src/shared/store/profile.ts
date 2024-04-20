import { defineStore } from 'pinia'

export const useProfileStore = defineStore('counter', {
  state: () => {
    return {
      isAuthenticated: false
    }
  }
})
