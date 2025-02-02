export type UserSession = {
  id: number
  sessionId: string
  userId: number
  name: string
  email?: string
  phone?: string
  created_at: Date
  updated_at: Date
}

export type CreateUserSessionDTO = {
  userId: number
  name: string
  sessionId: string
  email?: string
  phone?: string
}
