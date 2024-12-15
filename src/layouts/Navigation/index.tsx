import { NavLink, useSearchParams } from "react-router-dom";
import Button from "../../components/Button";
import { useTranslation } from "react-i18next";
import { useDarkModeContext } from "@/context/DarkModeContext";

export default function Navigation() {
  const { t } = useTranslation()
  const { isDarkMode } = useDarkModeContext()!
  const [searchParams] = useSearchParams()
  const isTourDetailPage = searchParams.get('detail') || false

  let textStyle = isDarkMode ? 'text-brand-300' : 'text-brand-700'
  if (isTourDetailPage) textStyle = "text-brand-300"
  return (
    <nav className={`flex items-center gap-12 text-lg font-medium ${textStyle} thin:max-tiny:hidden`}>
      <ul className="flex items-center gap-4 [&>li>.active]:pointer-events-none [&>li>.active]:border-b-2 [&>li>.active]:border-stone-200 ">
        {/* <ul className="flex items-center gap-4 [&>li>.active]:underline"> */}
        <li className="[&>a]:hover:border-b-2  [&>a]:border-stone-200 [&>.active]:transition-none [&>a]:transition-all [&>a]:ease-in-out [&>a]:duration-100">
          <NavLink className="" to="">{t('header.nav.homepage')}</NavLink>
        </li>
        <li className="[&>a]:hover:border-b-2  [&>a]:border-stone-200 [&>.active]:transition-none [&>a]:transition-all [&>a]:ease-in-out [&>a]:duration-100">
          {/* <NavLink to="cabins">{t('header.nav.cabins')}</NavLink> */}
          <NavLink to="tours">Tours</NavLink>
        </li>
        <li className="[&>a]:hover:border-b-2  [&>a]:border-stone-200 [&>.active]:transition-none [&>a]:transition-all [&>a]:ease-in-out [&>a]:duration-100">
          {/* <NavLink to="cabins">{t('header.nav.cabins')}</NavLink> */}
          <NavLink to="posts/home">Posts</NavLink>
        </li>
        <li className="[&>a]:hover:border-b-2  [&>a]:border-stone-200 [&>.active]:transition-none [&>a]:transition-all [&>a]:ease-in-out [&>a]:duration-100">
          <NavLink to="contact">{t('header.nav.contact')}</NavLink>
        </li>
        <li className="[&>a]:hover:border-b-2  [&>a]:border-stone-200 [&>.active]:transition-none [&>a]:transition-all [&>a]:ease-in-out [&>a]:duration-100">
          <NavLink to="about">{t('header.nav.about')}</NavLink>
        </li>
      </ul>
      {/* <Button type="nav-header">{t('header.btn')}</Button> */}
    </nav>
  );
}
