import api from '@/shared/api/axiosInstance.ts'
import type { AxiosResponse } from 'axios'
import type { SignInResponse, SignUpResponse } from '@/shared/types/models/responses/auth'
import type { SignInRequest, SignUpRequest } from '@/shared/types/models/requests/auth'
import { LocalStorage } from 'quasar'
import { jwtDecode, type JwtPayload } from 'jwt-decode'

export default class AuthService {
  static async signIn(credentials: SignInRequest): Promise<AxiosResponse<SignInResponse>> {
    return api.post<SignInResponse>('/oauth/token', credentials)
  }

  static async signUp(credentials: SignUpRequest): Promise<AxiosResponse<SignUpResponse>> {
    return api.post<SignUpResponse>('/api/auth/register', credentials)
  }

  static logout(): void {
    LocalStorage.remove('ACCESS_TOKEN')
  }

  static isAuth(): boolean {
    return !!LocalStorage.getItem<boolean>('ACCESS_TOKEN')
  }

  static getToken(): string {
    return LocalStorage.getItem<string>('ACCESS_TOKEN') || ''
  }

  static getTokenDecode(): JwtPayload {
    return jwtDecode(this.getToken())
  }
}
