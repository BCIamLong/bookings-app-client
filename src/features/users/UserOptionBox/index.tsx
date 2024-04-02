import { HiBars3 } from "react-icons/hi2";
import ButtonLink from "../../../components/ButtonLink";

export default function UserOptionBox() {
  return (
    <div className="flex items-center gap-1 overflow-hidden rounded-3xl bg-white">
      <button className="px-2">
        <HiBars3 className="px-0.5 text-2xl text-stone-700" />
      </button>
      <div className="bg-stone-700">
        <ButtonLink type="user-nav-header">Login</ButtonLink>
      </div>
    </div>
  );
}
