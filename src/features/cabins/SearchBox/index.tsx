import SearchForm from "../SearchForm";
import Button from "../../../components/Button";
import { useTranslation } from "react-i18next";

export default function SearchBox() {
  const { t } = useTranslation()
  return (
    <div className="flex justify-center">
      <div className="z-30 mx-auto md:w-[54rem] thin:w-[38rem] tiny:w-[45rem] sm:w-[48rem] -translate-y-96  text-stone-700 thin:-translate-y-72 tiny:-translate-y-96 absolute">
        <div className="text-stone-0 text-5xl font-bold w-[30rem] mb-12 thin:max-tiny:text-3xl">
          <h1>No matter where you’re going to, we’ll take you there</h1>
        </div>
        {/* <nav className="flex gap-6 px-6 py-3 text-stone-300">
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
        </nav> */}
        <SearchForm />
        <div className="flex items-center gap-3 mt-5">
          <div className="flex">
            <div><img className="rounded-full w-10 border-[3px] border-stone-0" src="imgs/users/user-6.jpg" alt="" /></div>
            <div className="-ml-3"><img className="rounded-full w-10 border-[3px] border-stone-0" src="imgs/users/user-7.jpg" alt="" /></div>
            <div className="-ml-3"><img className="rounded-full w-10 border-[3px] border-stone-0" src="imgs/users/user-8.jpg" alt="" /></div>
            <div className="-ml-3"><img className="rounded-full w-10 border-[3px] border-stone-0" src="imgs/users/user-9.jpg" alt="" /></div>
            <div className="-ml-3"><img className="rounded-full w-10 border-[3px] border-stone-0" src="imgs/users/user-10.jpg" alt="" /></div>
            <div className="-ml-3"><img className="rounded-full w-10 border-[3px] border-stone-0" src="imgs/users/user-11.jpg" alt="" /></div>
            <div className="flex items-center justify-center -ml-3 rounded-full w-10 border-[3px] border-stone-0 bg-brand-600">
              <p className="text-xl text-white">+</p>
            </div>
          </div>
          <div className="font-semibold">
            <p className="text-brand-100">2,500 people booked Tommorowland Event in last 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
