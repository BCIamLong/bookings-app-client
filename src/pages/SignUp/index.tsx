import { useTranslation } from "react-i18next";
import SignUpForm from "../../features/auth/SignUpForm";

export default function SignUp() {
  const { t } = useTranslation()
  return (
    <div
      style={{ backgroundImage: `url("/imgs/cabins/cabin-006.jpg")` }}
      className="flex h-screen flex-col items-center justify-center gap-6 rounded-l-[20%] bg-cover px-12 thin:max-tiny:rounded-l-[0%]"
    >
      <h2 className="text-3xl font-bold text-stone-100">
        {t('signup.heading')}
      </h2>
      <SignUpForm />
    </div>
  );
}
