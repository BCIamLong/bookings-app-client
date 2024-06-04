import { useTranslation } from "react-i18next";
import ResetPasswordForm from "../../features/auth/ResetPasswordForm";

export default function ResetPassword() {
  const { t } = useTranslation()
  return (
    <div
      style={{ backgroundImage: `url("/imgs/cabins/cabin-007.jpg")` }}
      className="flex h-screen flex-col items-center justify-center gap-6 bg-cover p-12 thin:max-tiny:rounded-none rounded-l-[20%]"
    >
      <h2 className="text-3xl font-bold text-stone-100">{t('reset-pwd.heading')}</h2>
      <ResetPasswordForm />
    </div>
  );
}
