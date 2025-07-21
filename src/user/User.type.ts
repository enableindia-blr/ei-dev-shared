export enum RegisteredVia {
  DISH = 'dish',
  BLIMEY = 'blimey',
  OPUN = 'opun',
  GSC = 'gsc',
  SPELLING_TOOL = 'spelling_tool',
  EI_ARCHIVES = 'ei_archives',
}

export type UserBase = {
  id: number
  name: string
  isActive: boolean
  isAdmin: boolean
  email?: string
  phone?: string
  adminType?: 'super' | 'division' | 'tech'
  isAdminFor?: RegisteredVia[]
  emailVerified: boolean
  phoneVerified: boolean
  registeredVia: RegisteredVia
  usesProjects?: RegisteredVia[]
  isBlocked?: boolean
  created_at: Date
  updated_at: Date
  whatsappId?: string
  customProps?: {
    [key in RegisteredVia]?: Record<string, any>
  }
}

export type User = Omit<UserBase, 'email' | 'phone'> &
  (
    | {
        email?: string
        phone: string
      }
    | {
        email: string
        phone?: string
      }
  )

export type UserForEmailVerification = User & {
  emailVerificationToken?: string
  emailVerificationTokenExpires?: Date
}

export type UserForPasswordReset = User & {
  passwordResetToken?: string
  passwordResetTokenExpires?: Date
}

export type UserForPhoneVerification = User & {
  phoneVerificationToken?: string
  phoneVerificationTokenExpires?: Date
}

export type UserForLogin = User & {
  hashedPassword: string
}

export type UpdateUserDto = Partial<
  Omit<User, 'id' | 'created_at' | 'updated_at'> & {
    password?: string
  }
>

export type CreateUserDtoForWhatsApp = Omit<
  User,
  | 'id'
  | 'created_at'
  | 'updated_at'
  | 'emailVerified'
  | 'phoneVerified'
  | 'isBlocked'
  | 'email'
  | 'whatsappId'
> & {
  whatsappId: string
}

export type CreateUserDtoForWebApp = Omit<
  User,
  | 'id'
  | 'created_at'
  | 'updated_at'
  | 'emailVerified'
  | 'phoneVerified'
  | 'isBlocked'
  | 'whatsappId'
> & {
  password: string
}

export type CreateUserDto = CreateUserDtoForWebApp | CreateUserDtoForWhatsApp

export type UserDTO = Omit<User, 'created_at'> & {
  sessionId: string
}

export type UserForAdminDTO = Omit<
  User,
  'created_at' | 'updated_at' | 'usesProjects'
>
