import Heading from "../Heading";

export default function Instructions() {
  return (
    <div className="grid grid-cols-2 py-10 px-20 gap-x-24 items-center bg-stone-0">
      <div className="bg-stone-0 p-6 shadow-sm">
        <p className="text-brand-600 font-bold text-sm mb-3">Fast & Easy</p>
        <Heading type="secondary">Get Your Favourite
          Tour Bookings</Heading>
        <ul className="mt-8 flex flex-col gap-6">
          <li className="flex gap-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-400 rounded-xl"></div>
            </div>
            <div>
              <p className="text-stone-600 text-lg font-semibold">Choose Destination</p>
              <p className="text-stone-600">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Urna, tortor tempus. </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-400 rounded-xl"></div>
            </div>
            <div>
              <p className="text-stone-600 text-lg font-semibold">Check Availability</p>
              <p className="text-stone-600">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Urna, tortor tempus. </p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-orange-400 rounded-xl"></div>
            </div>
            <div>
              <p className="text-stone-600 text-lg font-semibold">Let’s Go</p>
              <p className="text-stone-600">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Urna, tortor tempus. </p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <img src="banner-1.png" alt="" />
      </div>
    </div>
  )
}
