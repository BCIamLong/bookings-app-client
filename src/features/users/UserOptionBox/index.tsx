import { HiBars3 } from "react-icons/hi2";
import ButtonLink from "../../../components/ButtonLink";
import { Link } from "react-router-dom";

export default function UserOptionBox() {
  return (
    <div className="flex items-center gap-1 overflow-hidden rounded-3xl bg-white">
      <button className="px-2">
        <HiBars3 className="stroke-1 px-0.5 text-3xl text-stone-600" />
      </button>
      {/* <div className="bg-stone-100">
        <Link to="/login">
          <div className="border-stone-50 bg-white p-1">
            <img className="h-8 w-8" src="/default-user.jpg" alt="" />
          </div>
        </Link>
      </div> */}
      <div className="bg-stone-700">
        <Link to="/login">
          <ButtonLink type="user-nav-header">Login</ButtonLink>
        </Link>
      </div>
    </div>
  );
}
