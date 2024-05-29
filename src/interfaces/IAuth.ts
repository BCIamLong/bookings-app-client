export interface UserSession {
  _id: string
  name: string
  role: 'user' | 'admin'
  enable2FA: boolean
  verify2FAOtp?: boolean
}

export interface SignupInput {
  fullName: string
  email: string
  password: string
  passwordConfirm: string
}

export interface LoginInput {
  email: string
  password: string
}

export interface ForgotPasswordInput {
  email: string
}

export interface ResetPasswordInput {
  password: string
  passwordConfirm: string
}

export interface Verify2FAInput {
  otp: number
}

export interface VerifyEnable2FAInput extends Verify2FAInput {}

export interface EditProfileInput {
  name: string
  avatar: FileList
}

export interface EditEmailInput {
  email: string
}

export interface CheckPasswordInput {
  password: string
}

export interface EditPasswordInput extends ResetPasswordInput {}

export interface DeleteMeInput {
  reason: string
  password: string
}
