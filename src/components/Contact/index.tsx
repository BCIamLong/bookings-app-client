import { LuSendHorizonal } from "react-icons/lu";
import Input from "../form/Input";
import { useTranslation } from "react-i18next";
export default function Contact() {
  const { t } = useTranslation()
  return (
    <div className="flex items-center justify-center gap-12 bg-brand-600 px-3 py-6 text-stone-700">
      <div>
        <p className="text-xl font-semibold uppercase text-brand-100">{t('newsletter.heading')}</p>
        <p className="text-xs capitalize text-brand-300">{t('newsletter.extra-heading')}</p>
      </div>
      <div className="relative flex w-[40%] shadow-sm rounded-full shadow-brand-600">
        <Input
          type="text"
          placeholder={t('newsletter.holder')}
          variant="contact"
          id="email"
        />
        <div className="absolute right-[-1%] top-[-8%] rounded-full bg-stone-100 p-2">
          <LuSendHorizonal className="text-2xl text-brand-600" />
        </div>
      </div>
    </div>
  );
}
