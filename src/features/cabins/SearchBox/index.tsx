import SearchForm from "../SearchForm";
import Button from "../../../components/Button";
import { useTranslation } from "react-i18next";

export default function SearchBox() {
  const { t } = useTranslation()
  return (
    <div className="flex justify-center">
      <div className="z-30 mx-auto md:w-[54rem] thin:w-[38rem] tiny:w-[45rem] sm:w-[48rem] -translate-y-60  text-stone-700 thin:max-tiny:-translate-y-44 absolute">
        <nav className="flex gap-6 px-6 py-3 text-stone-300">
          <h2 className="text-3xl font-bold uppercase">{t('hero.nav.heading')}</h2>
          <ul className="flex gap-4 text-lg font-semibold">
            <li className="border-b-2">
              <Button type="nav-search">{t('hero.nav.cabins')}</Button>
            </li>
            <li>
              <Button type="nav-search">{t('hero.nav.flats')}</Button>
            </li>
            <li>
              <Button type="nav-search">{t('hero.nav.hotels')}</Button>
            </li>
            <li>
              <Button type="nav-search">{t('hero.nav.villas')}</Button>
            </li>
          </ul>
        </nav>
        <SearchForm />
      </div>
    </div>
  );
}
