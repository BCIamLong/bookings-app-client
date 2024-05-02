import { Outlet } from "react-router-dom"
import SettingsList from "../../features/auth/SettingsList"

export default function SettingsLayout() {
  return <div className="grid grid-cols-[1fr_3fr] gap-3 divide-x-[1px] divide-stone-100 thin:max-sm:grid-cols-1">
    <SettingsList />
    <Outlet />
  </div>
}