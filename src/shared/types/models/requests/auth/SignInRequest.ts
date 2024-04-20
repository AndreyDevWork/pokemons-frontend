export interface SignInRequest {
  grant_type: 'password'
  client_id: string
  client_secret: string
  username: string
  password: string
}
