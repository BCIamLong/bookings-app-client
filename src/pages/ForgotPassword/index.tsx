import { useTranslation } from "react-i18next";
import ForgotPasswordForm from "../../features/auth/ForgotPasswordForm";

export default function ForgotPassword() {
  const { t } = useTranslation()
  return (
    <div
      style={{ backgroundImage: `url("https://img.freepik.com/free-vector/fishing-village-seashore-neon-cartoon_1441-3154.jpg?t=st=1734318476~exp=1734322076~hmac=08940c18e416ac0d8aac762706e0d5c21ed77c9786def182322c7d84b8dccb26&w=2000")` }}
      className="relative flex h-screen flex-col items-center gap-6 bg-cover p-12 rounded-l-[20%] justify-center thin:max-tiny:rounded-l-[0%]"
    >
      <div className="absolute inset-0 bg-black bg-opacity-0 z-0 rounded-l-[20%]"></div>
      <h2 className="text-3xl font-bold text-brand-100 z-10">
        {t('forgot-pwd.heading')}
      </h2>
      <ForgotPasswordForm />
    </div>
  );
}
