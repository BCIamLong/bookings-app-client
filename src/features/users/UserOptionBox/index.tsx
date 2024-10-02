import ButtonLink from "../../../components/ButtonLink";
import { Link } from "react-router-dom";
import { useUserSession } from "../../auth/useUserSession";
import Spinner from "../../../components/Spinner";
import Logout from "@/features/auth/Logout";
import { useTranslation } from "react-i18next";

export default function UserOptionBox() {
  const { isLoading, user } = useUserSession();
  const { avatar } = user || {}
  const { t } = useTranslation()

  const avatarImg = avatar === 'default-avatar.jpg' ? "/default-avatar.jpg" : avatar

  if (isLoading) return <Spinner size="small" />;

  return (
    <>
      {user ? (
        <div className="flex gap-1">
          <Link to="profile">
            <div className="border-stone-50 bg-stone-0 p-1 ">
              <img className="h-9 w-9 rounded-full" src={`${avatarImg}`} alt="" />
            </div>
          </Link>
          <div className="overflow-hidden rounded-full rounded-l-none">
            <Logout />
          </div>
        </div>
      ) : (
        <div className="relative p-[3px] [&>div]:hover:flex">
          {/* <ButtonLink type="user-nav-header" href="/login">{t('header.options.login')}</ButtonLink> */}
          <div className="border-stone-50 bg-stone-0 rounded-full cursor-pointer">
            <img className="h-9 w-9 rounded-full" src={`/default-avatar.jpg`} alt="" />
          </div>
          <div className="absolute p-3 top-12 right-0 w-64 bg-stone-50 rounded-md hidden flex-col gap-3 ">
            <h2 className="text-xl text-stone-800 font-semibold">My account</h2>
            <ul className="p-3 flex gap-3 flex-col">
              <li><p className="p-2 text-stone-700 font-semibold hover:bg-stone-300 rounded-md cursor-pointer"> <Link to="bookmarks">Your bookmarks</Link></p></li>
              <li className="[&>button]:w-full">
                <ButtonLink type="login" href="login">Login</ButtonLink></li>
              <li className="[&>button]:w-full [&>a]:text-base"><ButtonLink type="secondary" href="signup">Signup</ButtonLink></li>
            </ul>
          </div>
        </div >
      )
      }
    </>
  );
}
