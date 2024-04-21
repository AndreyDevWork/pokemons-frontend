interface User {
  id: number
  username: string
  email: string | null
}

export interface ProfileResponse {
  date_of_birth: string
  firstname: string
  lastname: string
  role: string
  user: User
}
