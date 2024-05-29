import MenuOptions from "../MenuOptions";
import DarkMode from "@/components/DarkMode";
import UserOptionBox from "../../features/users/UserOptionBox";

export default function HeaderOptions() {
  return (
    <div className="flex relative gap-1 overflow-hidden bg-stone-0 rounded-full">
      <DarkMode />
      <MenuOptions />
      <UserOptionBox />
    </div>
  );
}
