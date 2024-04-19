import Heading from "../../../components/Heading";
import Enable2FA from "../Enable2FA/indext";

export default function Security() {
  return <div className="px-4 overflow-auto h-[100%]">
    <Heading type="tertiary">Manage your account security</Heading>
    <Enable2FA />
  </div>
}