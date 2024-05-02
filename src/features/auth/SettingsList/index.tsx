import { HiArrowLeft, HiChevronRight } from "react-icons/hi2";
import SettingsItem from "../SettingsItem";
import Heading from "../../../components/Heading";
import ButtonLink from "../../../components/ButtonLink";

export default function SettingsList() {
  return <ul className="flex flex-col gap-2 text-stone-700 thin:max-sm:mb-3 thin:max-sm:border-b-[1.5px] thin:max-sm:pb-3">
    <div className="flex justify-between">
      <Heading type="tertiary">Settings</Heading>
      <div className="mt-3 w-[20%] thin:max-sm:block hidden">
        <ButtonLink type="secondary" href="/profile" size="small" >
          <HiArrowLeft className="text-xl" />
          <span>Back</span>
        </ButtonLink>
      </div>
    </div>
    <SettingsItem to="account"><span>Your account</span><span><HiChevronRight className="text-lg" /></span></SettingsItem>
    <SettingsItem to="security"><span>Security</span><span><HiChevronRight className="text-lg" /></span></SettingsItem>
    <div className="mt-3 w-[50%] thin:max-sm:hidden">
      <ButtonLink type="secondary" href="/profile" size="small" >
        <HiArrowLeft className="text-xl" />
        <span>Back</span>
      </ButtonLink>
    </div>
  </ul>
}