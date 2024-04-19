import Heading from "../../../components/Heading";
import { HiCheck } from "react-icons/hi2";


export default function ProfileSidebar() {
  return <aside className="w-60 h-full p-6 bg-stone-100 text-stone-700 rounded-lg">
    <div className="flex flex-col justify-center items-center gap-3 mb-8">
      <img className="rounded-full" src="/default-avatar.jpg" alt="" />
      <div>
        <Heading type="tertiary">John Doe</Heading>
        <p className="text-xs text-stone-400">Joined in 2024</p>
      </div>
    </div>
    <div className="mb-8">
      <p className="text-lg font-semibold">Identity Verification</p>
      <p className="text-xs text-stone-400 leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    </div>
    <div className="text-sm text-stone-400">
      <p className="flex gap-2 items-center">
        <span><HiCheck /></span>
        <span>Email Confirmed</span></p>
      <p className="flex gap-2 items-center leading-6">
        <span><HiCheck /></span>
        <span>2FA Confirmed</span></p>
    </div>
  </aside >
}