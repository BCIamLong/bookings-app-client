import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export default function SettingsItem({ to, children }: { to: string, children: ReactNode }) {
  return <li className="[&>.active]:bg-stone-100">
    <NavLink className='duration-300 transition-all py-3 px-3 text-sm flex items-center justify-between cursor-pointer hover:bg-stone-100' to={to}>
      {children}
    </NavLink></li>
}