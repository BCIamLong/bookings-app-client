import { Outlet } from "react-router-dom";
import ProfileSidebar from "../../features/users/ProfileSidebar";

export default function ProfileLayout() {
  return <div className="p-12 grid grid-cols-[1fr_3fr] bg-stone-0 tiny:max-sm:px-8 gap-x-6 sm:max-md:px-12 thin:max-tiny:grid-cols-1 thin:max-tiny:gap-y-6 thin:max-tiny:px-6 tiny:max-sm:grid-cols-[1fr_2fr] sm:max-lg:grid-cols-[1fr_2.5fr]">
    <ProfileSidebar />
    <div>
      <Outlet />
    </div>
  </div>
}