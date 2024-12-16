import { useTranslation } from "react-i18next";
import ResetPasswordForm from "../../features/auth/ResetPasswordForm";

export default function ResetPassword() {
  const { t } = useTranslation()
  return (
    <div
      style={{ backgroundImage: `url("https://img.freepik.com/free-photo/starry-clear-sky-view-with-nature-landscape_23-2151683090.jpg?t=st=1734318625~exp=1734322225~hmac=c20cb060ac719c3a6cba7154093e97491ff3e5676f9613f954d5c1278b54adc6&w=2000")` }}
      className="relative flex h-screen flex-col items-center justify-center gap-6 bg-cover p-12 thin:max-tiny:rounded-none rounded-l-[20%]"
    >
      <div className="absolute inset-0 bg-black bg-opacity-0 z-0 rounded-l-[20%]"></div>
      <h2 className="text-3xl font-bold text-stone-100 z-10">{t('reset-pwd.heading')}</h2>
      <ResetPasswordForm />
    </div>
  );
}
