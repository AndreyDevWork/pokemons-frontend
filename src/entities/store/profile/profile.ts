import { defineStore, type StoreDefinition } from 'pinia'
import AuthService from '@/shared/api/services/AuthService.ts'
interface User {
  id: number
  username: string
  email: string
}

interface Profile {
  isAuthenticated: boolean
  date_of_birth: Date | null
  firstname: string | null
  lastname: string | null
  role: string | null
  user: User | null
}

export const useProfileStore: StoreDefinition<'profile', Profile> = defineStore('profile', {
  state: () => {
    return {
      isAuthenticated: AuthService.isAuth(),
      date_of_birth: null,
      firstname: null,
      lastname: null,
      role: null,
      user: null
    }
  }
})
