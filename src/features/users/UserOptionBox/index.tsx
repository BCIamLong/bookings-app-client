import ButtonLink from "../../../components/ButtonLink";
import { Link } from "react-router-dom";
import { useUserSession } from "../../auth/useUserSession";
import Spinner from "../../../components/Spinner";

export default function UserOptionBox() {
  const { isLoading, user } = useUserSession();
  if (isLoading) return <Spinner size="small" />;
  return (
    <>
      {user ? (
        <div className="bg-stone-100">
          <Link to="/profile">
            <div className="border-stone-50 bg-white p-1 ">
              <img className="h-9 w-9 rounded-full" src={`${user.avatar}`} alt="" />
            </div>
          </Link>
        </div>
      ) : (
        <div className="bg-stone-700">
          <Link to="/login">
            <ButtonLink type="user-nav-header">Login</ButtonLink>
          </Link>
        </div>
      )}
    </>
  );
}
