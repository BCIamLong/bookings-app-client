import { HiBars3 } from "react-icons/hi2";
import UserOptionBox from "../../features/users/UserOptionBox";
import Logout from "../../features/auth/Logout";

export default function HeaderOptions() {
  return (
    <div className="flex items-center gap-1 overflow-hidden rounded-3xl bg-white">
      <button className="px-2">
        <HiBars3 className="stroke-1 px-0.5 text-3xl text-stone-600" />
      </button>
      {/* <UserOptionBox /> */}
      <Logout />
    </div>
  );
}
