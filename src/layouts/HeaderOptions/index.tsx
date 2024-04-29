import { HiBars3 } from "react-icons/hi2";
import UserOptionBox from "../../features/users/UserOptionBox";
import Logout from "../../features/auth/Logout";
import DarkMode from "@/components/DarkMode";

export default function HeaderOptions() {
  return (
    <div className="flex items-center gap-1 overflow-hidden rounded-3xl bg-stone-0">
      <DarkMode />
      <button className="px-2">
        <HiBars3 className="stroke-1 px-0.5 text-3xl text-stone-600" />
      </button>
      <UserOptionBox />
      <Logout />
    </div>
  );
}
