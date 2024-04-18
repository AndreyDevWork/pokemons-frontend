import api from '@/shared/api/axiosInstance.ts'
import type { AxiosResponse } from 'axios'
import type { SignInResponse, SignUpResponse } from '@/shared/types/models/responses/auth'
import type { SignInRequest, SignUpRequest } from '@/shared/types/models/requests/auth'

export default class AuthService {
  static async signIn(credentials: SignInRequest): Promise<AxiosResponse<SignInResponse>> {
    return api.post<SignInResponse>('/oauth/token', {
      credentials
    })
  }

  static async signUp(credentials: SignUpRequest): Promise<AxiosResponse<SignUpResponse>> {
    return api.post<SignUpResponse>('/api/auth/register', credentials)
  }

  static logout(): void {
    console.log('LOGOUT')
  }
}
