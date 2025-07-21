import { RegisteredVia } from './User.type'

export type UserSession = {
  id: number
  sessionId: string
  userId: number
  name: string
  email?: string
  phone?: string
  whatsappId?: string
  isValid: boolean
  createdBy: RegisteredVia
  created_at: Date
  updated_at: Date
}

export type CreateUserSessionDTO = {
  userId: number
  name: string
  sessionId: string
  email?: string
  phone?: string
  whatsappId?: string
}
