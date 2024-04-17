import api from '@/shared/api/axiosInstance.ts'
import type { AxiosResponse } from 'axios'
import type { Profile } from '@/shared/types/models/responses/Profile.ts'

export default class ProfileService {
  static async show(userId: number): Promise<AxiosResponse<Profile>> {
    return await api.get<Profile>(`/api/profile/${userId}`)
  }
}
