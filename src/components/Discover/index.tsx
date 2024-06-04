import { useTranslation } from "react-i18next";
import Button from "../Button";
import Heading from "../Heading";

export default function Discover() {
  const { t } = useTranslation()
  return (
    <section className="flex bg-stone-0 items-center gap-24 sm:px-28 tiny:px-12 thin:px-0 py-28 thin:max-tiny:flex-col thin:max-tiny:justify-start" id='discover'>
      <div className="flex w-[70%] flex-col gap-5">
        <div className="mb-2">
          <Heading type="secondary">
            {t('discover.heading')}
          </Heading>
          <div className="w-[30%] border-b-4 border-stone-500 p-2 py-3"></div>
        </div>
        <p className="text-sm text-stone-500">
          {t('discover.description')}
        </p>
        <div className="mb-3 flex gap-4">
          <Button type="discover-light">{t('discover.links.question')}</Button>
          <Button type="discover-light">{t('discover.links.find')}</Button>
        </div>
        <Button type="discover">{t('discover.btn')}</Button>
      </div>
      <div className="w-[40rem] overflow-hidden rounded-md">
        <img src="/imgs/cabins/cabin-001.jpg" alt="" />
      </div>
    </section>
  );
}
