import { useTranslation } from "react-i18next";

export default function Copyright() {
  const { t } = useTranslation()

  return (
    <div className="border-t-[1px] border-stone-200 px-16 py-6 text-xs text-stone-500">
      <p>{t('footer.copyright')}</p>
    </div>
  );
}
