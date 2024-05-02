import Heading from "../../../components/Heading";
import { HiCheck } from "react-icons/hi2";
import { useUserSession } from "../../auth/useUserSession";
import Spinner from "../../../components/Spinner";


export default function ProfileSidebar() {
  const { user, isLoading } = useUserSession()
  const { fullName, createdAt, enable2FA, avatar } = user || {}

  if (isLoading) return <Spinner size="normal" />

  return <aside className="w-full self-start h-[84vh] flex flex-col p-6 bg-stone-100 text-stone-700 rounded-lg thin:max-tiny:grid thin:max-tiny:w-full thin:max-tiny:h-full thin:max-tiny:items-center thin:max-tiny:justify-center thin:max-tiny:grid-cols-2 thin:max-tiny:gap-x-12 thin:max-tiny:gap-y-0 ">
    <div className="flex flex-col justify-center items-center gap-3 mb-8 thin:max-tiny:flex-row  thin:max-tiny:col-span-2 thin:max-tiny:justify-start">
      <img className="rounded-full w-28 h-28" src={avatar} alt="" />
      <div>
        <Heading type="tertiary">{fullName}</Heading>
        <p className="text-xs text-stone-400">Joined in {new Date(createdAt).getFullYear()}</p>
      </div>
    </div>
    <div className="mb-8 thin:max-tiny:mb-0">
      <p className="text-lg font-semibold">Identity Verification</p>
      <p className="text-xs text-stone-400 leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    </div>
    <div className="text-sm text-stone-400">
      <p className="flex gap-2 items-center">
        <span><HiCheck /></span>
        <span>Email Confirmed</span>
      </p>
      {enable2FA &&
        <p className="flex gap-2 items-center leading-6">
          <span><HiCheck /></span>
          <span>2FA Confirmed</span>
        </p>}
    </div>
  </aside >
}