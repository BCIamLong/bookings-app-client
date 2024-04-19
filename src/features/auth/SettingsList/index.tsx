import { HiArrowLeft, HiChevronRight } from "react-icons/hi2";
import SettingsItem from "../SettingsItem";
import Heading from "../../../components/Heading";
import ButtonLink from "../../../components/ButtonLink";

export default function SettingsList() {
  return <ul className="flex flex-col gap-2 text-stone-700">
    <Heading type="tertiary">Settings</Heading>
    <SettingsItem to="account"><span>Your account</span><span><HiChevronRight className="text-lg" /></span></SettingsItem>
    <SettingsItem to="security"><span>Security</span><span><HiChevronRight className="text-lg" /></span></SettingsItem>
    <div className="mt-3 w-[50%]">
      <ButtonLink type="secondary" href="/profile" size="small" >
        <HiArrowLeft className="text-xl" />
        <span>Back</span>
      </ButtonLink>
    </div>
  </ul>
}