import { Outlet } from "react-router-dom";
import ProfileSidebar from "../../features/users/ProfileSidebar";

export default function ProfileLayout() {
  return <div className="p-12 h-screen grid grid-cols-[1fr_3fr]">
    <ProfileSidebar />
    <div>
      <Outlet />
    </div>
  </div>
}