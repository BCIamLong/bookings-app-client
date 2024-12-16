import { useTranslation } from "react-i18next";
import SignUpForm from "../../features/auth/SignUpForm";

export default function SignUp() {
  const { t } = useTranslation()
  return (
    <div
      style={{ backgroundImage: `url("https://img.freepik.com/free-psd/world-tourism-day-3d-rendering-background_23-2150611214.jpg?t=st=1734317536~exp=1734321136~hmac=d44d91cc9d7ee42786b1743bef7eec0d62a485c09261cbf7874e2a2cf65e9133&w=2000")` }}
      className="flex h-screen flex-col object-cover items-center justify-center gap-6 rounded-l-[20%] bg-cover px-12 thin:max-tiny:rounded-l-[0%] [&>form]:opacity-90"
    >
      <h2 className="text-3xl font-bold text-stone-100">
        {t('signup.heading')}
      </h2>
      <SignUpForm />
    </div>
  );
}
