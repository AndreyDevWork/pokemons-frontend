import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`
  return config
})

export default api
