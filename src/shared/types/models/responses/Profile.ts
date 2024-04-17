interface User {
  id: number
  username: string
  email: string
}

export interface Profile {
  date_of_birth: string
  firstname: string
  lastname: string
  role: string
  user: User
}
