import MenuOptions from "../MenuOptions";
import DarkMode from "@/components/DarkMode";
import UserOptionBox from "../../features/users/UserOptionBox";
import Languages from "@/components/Languages";

export default function HeaderOptions() {
  return (
    <div className="flex items-center relative bg-stone-0 rounded-full">
      <div className="overflow-hidden rounded-full rounded-r-none">
        <DarkMode />
      </div>
      <Languages />
      <MenuOptions />
      <UserOptionBox />
    </div>
  );
}
