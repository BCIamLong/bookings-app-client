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
        <div className="bg-stone-0 flex gap-1">
          <Link to="profile">
            <div className="border-stone-50 bg-stone-0 p-1 ">
              <img className="h-9 w-9 rounded-full" src={`${avatarImg}`} alt="" />
            </div>
          </Link>
          <Logout />
        </div>
      ) : (
        <div className="bg-stone-700">
          <Link to="login">
            <ButtonLink type="user-nav-header" href="/login">{t('header.options.login')}</ButtonLink>
          </Link>
        </div>
      )}
    </>
  );
}
