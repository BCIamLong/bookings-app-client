import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t } = useTranslation()
  return (
    <nav className="flex items-center gap-12 text-lg font-medium text-stone-700 thin:max-tiny:hidden">
      <ul className="flex items-center gap-4 [&>li>.active]:pointer-events-none [&>li>.active]:border-b-2 [&>li>.active]:border-stone-500 ">
        {/* <ul className="flex items-center gap-4 [&>li>.active]:underline"> */}
        <li className="[&>a]:hover:border-b-2  [&>a]:border-stone-500 [&>.active]:transition-none [&>a]:transition-all [&>a]:ease-in-out [&>a]:duration-100">
          <NavLink to="">{t('header.nav.homepage')}</NavLink>
        </li>
        <li className="[&>a]:hover:border-b-2  [&>a]:border-stone-500 [&>.active]:transition-none [&>a]:transition-all [&>a]:ease-in-out [&>a]:duration-100">
          {/* <NavLink to="cabins">{t('header.nav.cabins')}</NavLink> */}
          <NavLink to="tours">Tours</NavLink>
        </li>
        <li className="[&>a]:hover:border-b-2  [&>a]:border-stone-500 [&>.active]:transition-none [&>a]:transition-all [&>a]:ease-in-out [&>a]:duration-100">
          {/* <NavLink to="cabins">{t('header.nav.cabins')}</NavLink> */}
          <NavLink to="posts">Posts</NavLink>
        </li>
        <li className="[&>a]:hover:border-b-2  [&>a]:border-stone-500 [&>.active]:transition-none [&>a]:transition-all [&>a]:ease-in-out [&>a]:duration-100">
          <NavLink to="contact">{t('header.nav.contact')}</NavLink>
        </li>
        <li className="[&>a]:hover:border-b-2  [&>a]:border-stone-500 [&>.active]:transition-none [&>a]:transition-all [&>a]:ease-in-out [&>a]:duration-100">
          <NavLink to="about">{t('header.nav.about')}</NavLink>
        </li>
      </ul>
      {/* <Button type="nav-header">{t('header.btn')}</Button> */}
    </nav>
  );
}
