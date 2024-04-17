export interface UserSession {
  _id: string;
  name: string;
  role: "user" | "admin";
  enable2FA: boolean;
  verify2FAOtp?: boolean;
}

export interface SignupInput {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface ForgotPasswordInput {
  email: string;
}

export interface ResetPasswordInput {
  password: string;
  passwordConfirm: string;
}

export interface Verify2FAInput {
  otp: number;
}
