import Heading from "@/components/Heading";

export default function TourItem() {
  return (
    <li className="bg-stone-50 shadow-sm rounded-lg overflow-hidden">
      <div className="cursor-pointer">
        <img className="w-full" src="https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className="flex justify-between bg-brand-500 px-4 py-1 sm:max-xl:px-2 thin:max-sm:px-3">
          <p className="flex gap-1 text-stone-50 text-xs font-semibold lg:max-xl:text-xs">
            <span>📅</span>
            <span>12, September 2022</span>
          </p>
          <p className="flex gap-1 text-stone-50 text-xs font-semibold lg:max-xl:text-xs">
            <span>🤼</span>
            <span>120+ People</span></p>
        </div>
        <div className="py-5 px-4 flex flex-col gap-2 text-stone-600">
          <Heading type="tertiary">Switzerland</Heading>
          <p>Qui tempore voluptate qui quia commodi rem praesentium alias et.</p>
          <div className="flex gap-3 font-semibold">
            <p>1,100 $</p>
            <p className="flex gap-1">
              <span>⭐</span>
              <span>5.0</span></p>
          </div>
        </div>
      </div>
    </li>
  )
}
