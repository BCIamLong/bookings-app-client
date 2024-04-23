import { HiOutlineBuildingOffice, HiOutlinePhone } from "react-icons/hi2";

import Button from "../../../components/Button";
import { bookCabin } from "../../../services/bookingsApiService";
import { ICabin } from "../../../interfaces";

export default function CabinCard({ cabin }: { cabin: ICabin }) {
  const { _id: cabinId, regularPrice, discount, name, description, image } = cabin
  const discountPrice = regularPrice - Math.round(regularPrice * (discount / 100))
  const handleClick = async function () {
    const url = await bookCabin({ cabinId, regularPrice, name, description, image })
    console.log(url)
    window.location.assign(url);
  }
  return (
    <div className="min-h-24 text-stone-700 shadow-md shadow-stone-300 px-4 py-6">
      <p className="pb-4 border-b-[1.5px] font-bold border-stone-300">
        <span className="line-through text-stone-400">$ {regularPrice} </span>
        <span> &rarr; $ {discountPrice} </span>
        <span>(-{discount}%)</span>
      </p>
      <ul className="py-8 text-sm text-stone-500 flex flex-col gap-1">
        <li>3 days: $ 1000</li>
        <li>7 days: $ 2000</li>
        <li>14 days: $ 3000</li>
      </ul>
      <Button type="primary" size="small" onClick={handleClick}>Reserve Now</Button>
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
