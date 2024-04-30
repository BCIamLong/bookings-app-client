import MenuOptions from "../MenuOptions";
import DarkMode from "@/components/DarkMode";
import Logout from "../../features/auth/Logout";
import UserOptionBox from "../../features/users/UserOptionBox";

export default function HeaderOptions() {
  return (
    <div className="flex relative items-center gap-1 overflow-hidden rounded-3xl bg-stone-0">
      <DarkMode />
      <MenuOptions />
      <UserOptionBox />
      <Logout />
    </div>
  );
}
