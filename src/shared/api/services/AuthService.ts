import api from '@/shared/api/axiosInstance.ts'
import type { AxiosResponse } from 'axios'
import type { SignInResponse } from '@/shared/types/models/responses/SignInResponse.ts'
import type { SignUpResponse } from '@/shared/types/models/responses/SignUpResponse.ts'
import type { SignInRequest } from '@/shared/types/models/requests/auth/SignInRequest.ts'
import type { SignUpRequest } from '@/shared/types/models/requests/auth/SignUpRequest.ts'

export default class AuthService {
  static async signIn(credentials: SignInRequest): Promise<AxiosResponse<SignInResponse>> {
    return api.post<SignInResponse>('/oauth/token', {
      credentials
    })
  }

  static async signUp(credentials: SignUpRequest): Promise<AxiosResponse<SignUpResponse>> {
    return api.post<SignUpResponse>('/api/auth/register', {
      credentials
    })
  }

  static logout(): void {
    console.log('LOGOUT')
  }
}
