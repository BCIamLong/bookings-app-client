import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t } = useTranslation()
  return (
    <nav className="flex items-center gap-12 text-xl font-medium text-stone-700 thin:max-tiny:hidden">
      <ul className="flex items-center gap-4 [&>li>.active]:underline">
        <li>
          <NavLink to="">{t('header.nav.homepage')}</NavLink>
        </li>
        <li>
          <NavLink to="cabins">{t('header.nav.cabins')}</NavLink>
        </li>
        <li>
          <NavLink to="contact">{t('header.nav.contact')}</NavLink>
        </li>
        <li>
          <NavLink to="about">{t('header.nav.about')}</NavLink>
        </li>
      </ul>
      <Button type="nav-header">{t('header.btn')}</Button>
    </nav>
  );
}
