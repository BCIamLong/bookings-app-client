export interface UserSession {
  _id: string;
  name: string;
  role: "user" | "admin";
  enable2FA: boolean;
  verify2FAOtp?: boolean;
}
