import { HiOutlineShare, HiOutlineHeart } from "react-icons/hi2"
import { IoBedOutline } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import Heading from "../../../components/Heading"
import CabinCard from "../CabinCard";

export default function CabinDetail() {
  const classStyle = `rounded-md overflow-hidden h-[98%]`
  return (
    <div>
      <div className="grid grid-cols-4 gap-3 items-center py-12">
        <div className="row-span-2 col-span-2 rounded-lg overflow-hidden">
          <img src="/imgs/cabins/cabin-001.jpg" alt="" />
        </div>
        <div className={classStyle}>
          <img src="/imgs/cabins/cabin-001.jpg" alt="" />
        </div>
        <div className={classStyle}>
          <img src="/imgs/cabins/cabin-001.jpg" alt="" />
        </div>
        <div className={classStyle}>
          <img src="/imgs/cabins/cabin-001.jpg" alt="" />
        </div>
        <div className={classStyle}>
          <img src="/imgs/cabins/cabin-001.jpg" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-[1.5fr_1fr] text-stone-700 p-6 gap-12">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <div>
              <Heading type="tertiary">Name of Cabin</Heading>
              <p className="text-xs text-stone-500">Address</p>
            </div>
            <div className="flex gap-2 items-center">
              <HiOutlineHeart className="stroke-2 text-2xl" />
              <HiOutlineShare className="stroke-2 text-2xl" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-36 h-36 rounded-md flex flex-col justify-center items-center bg-stone-200 text-stone-600">
              <IoBedOutline className="text-4xl" />
              <p className="text-xs font-semibold">3 Bedrooms</p>
            </div>
            <div className="w-36 h-36 rounded-md flex flex-col justify-center items-center bg-stone-200 text-stone-600">
              <IoBedOutline className="text-4xl" />
              <p className="text-xs font-semibold">3 Bedrooms</p>
            </div>
            <div className="w-36 h-36 rounded-md flex flex-col justify-center items-center bg-stone-200 text-stone-600">
              <IoBedOutline className="text-4xl" />
              <p className="text-xs font-semibold">3 Bedrooms</p>
            </div>
            <div className="w-36 h-36 rounded-md flex flex-col justify-center items-center bg-stone-200 text-stone-600">
              <IoBedOutline className="text-4xl" />
              <p className="text-xs font-semibold">3 Bedrooms</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-stone-500">
            <Heading type="heading-4">Cabin description</Heading>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, quas? Laborum placeat quibusdam dignissimos molestiae, doloribus rem at rerum aut nesciunt expedita similique ad deserunt voluptatem quaerat quisquam nemo libero!</p>
          </div>
          <div>
            <Heading type="heading-4">Offered Amenities</Heading>
            <div className="grid grid-cols-2 gap-4 py-3 w-[80%] text-sm text-stone-600">
              <div className="flex items-center gap-3">
                <GiKnifeFork />
                <p>Kitchen</p>
              </div>
              <div className="flex items-center gap-3">
                <GiKnifeFork />
                <p>Kitchen</p>
              </div>
              <div className="flex items-center gap-3">
                <GiKnifeFork />
                <p>Kitchen</p>
              </div>
              <div className="flex items-center gap-3">
                <GiKnifeFork />
                <p>Kitchen</p>
              </div>
            </div>
          </div>
          <div>
            <Heading type="heading-4">Safety and Hygiene</Heading>
            <div className="grid grid-cols-2 gap-4 py-3 w-[80%] text-sm text-stone-600">
              <div className="flex items-center gap-3">
                <GiKnifeFork />
                <p>Kitchen</p>
              </div>
              <div className="flex items-center gap-3">
                <GiKnifeFork />
                <p>Kitchen</p>
              </div>
              <div className="flex items-center gap-3">
                <GiKnifeFork />
                <p>Kitchen</p>
              </div>
              <div className="flex items-center gap-3">
                <GiKnifeFork />
                <p>Kitchen</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%] ml-12">
          <CabinCard />
        </div>
      </div>
    </div>
  )
}
