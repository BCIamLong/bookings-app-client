import { HiCheck, HiXMark } from "react-icons/hi2";
import Button from "../../../components/Button";
import ButtonLink from "../../../components/ButtonLink";
import Heading from "../../../components/Heading";
import { useEnable2FA } from "../useEnable2FA";
import Spinner from "../../../components/Spinner";
import { useUserSession } from "../useUserSession";
import { useDisable2FA } from "../useDisable2FA";
import Modal from "../../../components/Modal";
import Popup from "../../../components/Popup";
import { useTranslation } from "react-i18next";

export default function Enable2FA() {
  const { t } = useTranslation()
  const { user, isLoading } = useUserSession()
  const { enable2FA, isEnabling } = useEnable2FA()
  const { disable2FA, isDisabling } = useDisable2FA()

  const enable2FAHandler = function () {
    enable2FA()
  }

  const disable2FAHandler = function () {
    disable2FA()
  }

  if (isLoading) return <Spinner size="normal" />

  return <div className="border-b-[1.5px] border-stone-300 py-4 flex flex-col gap-2">
    <div className="border-b-[1.5px] border-stone-300 py-2 text-stone-700">
      <Heading type="heading-4">{t('profile.nav.settings.nav.security.forms.2fa.heading')}</Heading>
    </div>
    <p className="text-xs text-stone-500 leading-5">{t('profile.nav.settings.nav.security.forms.2fa.description')}</p>
    <div className="flex justify-between items-center">
      <ButtonLink type="simple" href="#">{t('profile.nav.settings.nav.security.forms.2fa.link')}</ButtonLink>
      {!user.enable2FA ?
        <Button type="primary" size="small" onClick={enable2FAHandler}>
          {isEnabling ? <Spinner size="small" /> : `${t('profile.nav.settings.nav.security.forms.2fa.btn.on')}`}
        </Button> :
        <Modal>
          <Modal.Open openName="disable-2fa">
            <Button type="primary" size="small">
              {t('profile.nav.settings.nav.security.forms.2fa.btn.off')}
            </Button>
          </Modal.Open>
          <Modal.Window name="disable-2fa">
            <Popup isLoading={isDisabling} btnContent="Disable 2FA" onHandle={disable2FAHandler} >
              <div className="flex flex-col gap-2 text-stone-600" >
                <p>Disabling 2FA makes your account less secure. Are you sure you want to proceed?</p>
                <p className="flex gap-2 text-sm items-center text-stone-500"><span><HiCheck /></span><span>Click "Disable 2FA" to confirm.</span></p>
                <p className="flex gap-2 text-sm items-center text-stone-500"><span><HiXMark /></span><span>Click "Cancel" to keep it enabled.</span></p>
                <p>If you need assistance, contact our support team at [support contact information].</p>
              </div>
            </Popup>
          </Modal.Window>
        </Modal>
      }
    </div>
  </div >
}