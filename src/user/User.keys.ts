import type { UserDTO, UserForAdminDTO } from './User.type'

// E2: typed so a renamed/misspelled field fails the build instead of vanishing from responses.
export const UserDTOKeys: (keyof UserDTO)[] = [
  'id',
  'email',
  'phone',
  'adminType',
  'emailVerified',
  'phoneVerified',
  'registeredVia',
  'isBlocked',
  'name',
  'isActive',
  'isAdmin',
  'sessionId',
  'whatsappId',
  'customProps',
  'updated_at',
  'isAdminFor',
]

export const UserForAdminDTOKeys: (keyof UserForAdminDTO)[] = [
  'id',
  'email',
  'phone',
  'adminType',
  'emailVerified',
  'phoneVerified',
  'registeredVia',
  'isBlocked',
  'name',
  'isActive',
  'isAdmin',
  'whatsappId',
  'customProps',
]
