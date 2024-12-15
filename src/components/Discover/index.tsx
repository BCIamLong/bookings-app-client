import { useTranslation } from "react-i18next";
import Button from "../Button";
import Heading from "../Heading";

export default function Discover() {
  const { t } = useTranslation()
  return (
    <section className="flex bg-stone-0 items-center gap-24 sm:px-28 tiny:px-12 thin:px-0 pt-12 pb-28 md:px-12 thin:max-tiny:flex-col thin:max-tiny:justify-start" id='discover'>
      <div className="flex w-[70%] flex-col gap-5">
        <div className="mb-2  [&>h1]:text-brand-600">
          <Heading type="secondary">
            Discover More About Tour Booking
          </Heading>
          <div className="w-[30%] border-b-4 border-stone-400 p-2 py-3"></div>
        </div>
        <p className="text-sm text-stone-500">
          Discover the world with ease. Our tour booking platform offers a seamless experience, from exploring a wide range of tours and packages to receiving expert guidance and flexible booking options. Secure payments and 24/7 customer support ensure a worry-free journey. Ready to embark on your next adventure? Start planning today!
        </p>
        <div className="mb-3 flex gap-4">
          <Button type="discover-light">{t('discover.links.question')}</Button>
          <Button type="discover-light">Find A Tour</Button>
        </div>
        <Button type="discover">{t('discover.btn')}</Button>
      </div>
      <div className="w-[40rem] overflow-hidden rounded-md">
        <img src="/tour-banner-2.png" alt="" />
      </div>
    </section>
  );
}
