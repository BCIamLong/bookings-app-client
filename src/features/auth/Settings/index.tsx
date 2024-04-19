import SettingsList from "../SettingsList"

// ! BECAUSE WE BUILD SETTING LAYOUTS THEN THIS WILL BE NOT USED
export default function Settings() {
  return <div className="grid grid-cols-[1fr_3fr]">
    <SettingsList />
    <div>H</div>

  </div>
}