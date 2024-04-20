import { defineStore } from 'pinia'
import AuthService from '@/shared/api/services/AuthService.ts'

export const useProfileStore = defineStore('profile', {
  state: () => {
    return {
      isAuthenticated: AuthService.isAuth()
    }
  }
})
