import { HiOutlineBuildingOffice, HiOutlinePhone } from "react-icons/hi2";

import Button from "../../../components/Button";

export default function CabinCard() {
  return (
    <div className="min-h-24 text-stone-700 shadow-md shadow-stone-300 px-4 py-6">
      <p className="pb-4 border-b-[1.5px] font-bold border-stone-300">$ 1000 - $ 2000</p>
      <ul className="py-8 text-sm text-stone-500 flex flex-col gap-1">
        <li>Short Period: $ 1000</li>
        <li>Medium Period: $ 2000</li>
        <li>Long Period: $ 2000</li>
      </ul>
      <Button type="primary" size="small">Reserve Now</Button>
      <div className="flex justify-between items-center py-6 text-xs font-semibold">
        <div className="flex items-center gap-2">
          <HiOutlineBuildingOffice className="text-sm" />
          <p>Property Inquiry</p>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlinePhone className="text-sm" />
          <p>Contact Host</p>
        </div>
      </div>
    </div>
  )
}
