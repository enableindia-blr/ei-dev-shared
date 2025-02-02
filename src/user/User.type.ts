export type UserBase = {
  id: number
  name: string
  isActive: boolean
  isAdmin: boolean
  email?: string
  phone?: string
  adminType?: "super" | "division" | "tech"
  emailVerified: boolean
  phoneVerified: boolean
  registeredVia: "dish" | "blimey" | "opun"
  isBlocked?: boolean
  created_at: Date
  updated_at: Date
}

export type User = UserBase &
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
  Omit<User, "id" | "created_at" | "updated_at"> & {
    password?: string
  }
>

export type CreateUserDto = Omit<
  User,
  | "id"
  | "created_at"
  | "updated_at"
  | "emailVerified"
  | "phoneVerified"
  | "isBlocked"
> & {
  password: string
}

export type UserDTO = Omit<User, "id" | "created_at" | "updated_at"> & {
  sessionId: string
}
