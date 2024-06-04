import { useTranslation } from "react-i18next";
import ButtonLink from "../../../components/ButtonLink";

export default function ProfileOptions() {
  const { t } = useTranslation()
  return <div className="flex gap-3 py-3">
    <ButtonLink type="secondary" href="edit">{t('profile.nav.edit.btn')}</ButtonLink>
    <ButtonLink type="secondary" href="setting">{t('profile.nav.settings.btn')}</ButtonLink>
  </div>
}