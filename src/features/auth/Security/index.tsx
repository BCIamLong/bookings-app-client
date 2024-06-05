import { useTranslation } from "react-i18next";
import Heading from "../../../components/Heading";
import Enable2FA from "../Enable2FA";

export default function Security() {
  const { t } = useTranslation()
  return <div className="px-4 overflow-auto h-[100%]">
    <Heading type="tertiary">{t('profile.nav.settings.nav.security.heading1')}</Heading>
    <Enable2FA />
  </div>
}