import api from '@/shared/api/axiosInstance.ts'
import type { AxiosResponse } from 'axios'
import type { ProfileResponse } from '@/shared/types/models/responses/profile/ProfileResponse.ts'

export default class ProfileService {
  static async show(userId: number): Promise<AxiosResponse<ProfileResponse>> {
    return await api.get<ProfileResponse>(`/api/profile/${userId}`)
  }
}
