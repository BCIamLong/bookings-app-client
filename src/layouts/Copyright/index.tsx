import { useTranslation } from "react-i18next";

export default function Copyright() {
  const { t } = useTranslation()

  return (
    <div className="border-t-[1px] border-brand-300 px-16 py-6 text-xs text-brand-500">
      <p>{t('footer.copyright')}</p>
    </div>
  );
}
