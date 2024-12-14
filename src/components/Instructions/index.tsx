import { HiOutlineCheck, HiOutlineMagnifyingGlass, HiOutlineRocketLaunch } from "react-icons/hi2";
import Heading from "../Heading";

export default function Instructions() {
  return (
    <div className="grid grid-cols-2 py-10 px-20 gap-x-24 items-center bg-stone-0  thin:max-tiny:gap-x-12 thin:max-sm:px-12">
      <div className="bg-stone-0 p-6 shadow-sm thin:max-tiny:col-span-2">
        <p className="text-brand-600 font-bold text-sm mb-3">Fast & Easy</p>
        <Heading type="secondary">Get Your Favourite
          Tour Bookings</Heading>
        <ul className="mt-8 flex flex-col gap-6">
          <li className="flex gap-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-brand-400 rounded-xl flex items-center justify-center">
                <HiOutlineMagnifyingGlass className="text-3xl text-brand-100 stroke-2" />
              </div>
            </div>
            <div>
              <p className="text-stone-600 text-lg font-semibold">Choose Destination</p>
              <p className="text-stone-600">Explore a world of wonders. From bustling cities to serene landscapes, we've got you covered. </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-brand-400 rounded-xl flex items-center justify-center">
                <HiOutlineCheck className="text-3xl text-brand-100 stroke-2" />
              </div>
            </div>
            <div>
              <p className="text-stone-600 text-lg font-semibold">Check Availability</p>
              <p className="text-stone-600">Tailor your trip with our flexible booking options. Find the perfect dates and accommodations to suit your needs. </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-brand-400 rounded-xl flex items-center justify-center">
                <HiOutlineRocketLaunch className="text-4xl text-brand-100 stroke-[1.5]" />
              </div>
            </div>
            <div>
              <p className="text-stone-600 text-lg font-semibold">Let’s Go</p>
              <p className="text-stone-600">Your dream vacation is just a click away. Embark on your adventure and create unforgettable memories.</p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <img className="rounded-full" src="tour-banner-1.png" alt="" />
      </div>
    </div>
  )
}
