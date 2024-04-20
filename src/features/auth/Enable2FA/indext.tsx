import Button from "../../../components/Button";
import ButtonLink from "../../../components/ButtonLink";
import Heading from "../../../components/Heading";
import { useEnable2FA } from "../useEnable2FA";
import Spinner from "../../../components/Spinner";
import { useUserSession } from "../useUserSession";
import { useDisable2FA } from "../useDisable2FA";

export default function Enable2FA() {
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
      <Heading type="heading-4">Two-factor authentication</Heading>
    </div>
    <p className="text-xs text-stone-500 leading-5">Keep your booking app account safe with two-factor authentication (2FA)! After entering your password, you'll receive a unique code via text or authentication app. This extra step ensures that only you can access your account, even if your password is compromised. Your security is our priority, so enable 2FA today for peace of mind every time you book.</p>
    <div className="flex justify-between items-center">
      <ButtonLink type="simple" href="#">Learn more</ButtonLink>
      {!user.enable2FA ?
        <Button type="primary" size="small" onClick={enable2FAHandler}>
          {isEnabling ? <Spinner size="small" /> : 'Turn on 2FA'}
        </Button> :
        <Button type="primary" size="small" onClick={disable2FAHandler}>
          {isDisabling ? <Spinner size="small" /> : 'Turn off 2FA'}
        </Button>
      }
    </div>
  </div>
}