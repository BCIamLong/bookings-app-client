import { HiArrowLeft, HiChevronRight } from "react-icons/hi2";
import SettingsItem from "../SettingsItem";
import Heading from "../../../components/Heading";
import ButtonLink from "../../../components/ButtonLink";
import { useTranslation } from "react-i18next";

export default function SettingsList() {
  const { t } = useTranslation()
  return <ul className="flex flex-col gap-2 text-stone-700 thin:max-sm:mb-3 thin:max-sm:border-b-[1.5px] thin:max-sm:pb-3">
    <div className="flex justify-between">
      <Heading type="tertiary">{t('profile.nav.settings.heading')}</Heading>
      <div className="mt-3 w-[21%] thin:max-sm:block hidden">
        <ButtonLink type="secondary" href="/profile" size="small" >
          <HiArrowLeft className="text-xl" />
          <span>{t('form.btn.back')}</span>
        </ButtonLink>
      </div>
    </div>
    <SettingsItem to="account"><span>{t('profile.nav.settings.nav.account.heading')}</span><span><HiChevronRight className="text-lg" /></span></SettingsItem>
    <SettingsItem to="security"><span>{t('profile.nav.settings.nav.security.heading')}</span><span><HiChevronRight className="text-lg" /></span></SettingsItem>
    <div className="mt-3 w-[51%] thin:max-sm:hidden">
      <ButtonLink type="secondary" href="/profile" size="small" >
        <HiArrowLeft className="text-xl" />
        <span>{t('form.btn.back')}</span>
      </ButtonLink>
    </div>
  </ul>
}