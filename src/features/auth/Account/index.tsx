import { useTranslation } from "react-i18next";
import Heading from "../../../components/Heading";
import DeleteMeForm from "../DeleteMeForm";
import UpdateEmailForm from "../UpdateEmailForm";
import UpdatePasswordForm from "../UpdatePasswordForm";

export default function Account() {
  const { t } = useTranslation()
  return <div className="px-4 overflow-auto h-[90vh]">
    <Heading type="tertiary">{t('profile.nav.settings.nav.account.heading')}</Heading>
    <UpdateEmailForm />
    <UpdatePasswordForm />
    <DeleteMeForm />
  </div>
}