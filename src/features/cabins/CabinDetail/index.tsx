import { HiOutlineShare, HiChevronRight } from "react-icons/hi2"
import { IoBedOutline } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import Heading from "../../../components/Heading"
import CabinCard from "../CabinCard";
import ButtonLink from "../../../components/ButtonLink";
import { useCabin } from "../useCabin";
import Spinner from "../../../components/Spinner";
import { ICabin } from "../../../interfaces";
import Map from "@/components/Map";
import Bookmark from "@/features/bookmarks/Bookmark";
import { useTranslation } from "react-i18next";

export default function CabinDetail() {
  const { t } = useTranslation()
  const { cabin, isLoading } = useCabin()
  const { name, description, image } = cabin || {}
  const cabinImage = image?.startsWith('cabin-') ? `/imgs/cabins/${image}` : image
  const classStyle = `rounded-md overflow-hidden h-[98%]`
  if (isLoading) return <Spinner size="normal" />

  return (
    <>
      <div className="relative">
        <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="uppercase text-stone-50 font-bold text-sm leading-8">Explore</h2>
          <p className="text-8xl text-stone-50 font-semibold font-title">{name}</p>
        </div>
        <img className="brightness-[90%] z-10 h-[33rem] w-full" src="https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div className="px-6 pt-8 py-20">
        <div className="flex gap-1 items-center text-stone-500 ">
          <ButtonLink type="simple" href="/">{t('header.nav.homepage')}</ButtonLink>
          <HiChevronRight />
          <ButtonLink type="simple" href="/cabins">{t('header.nav.cabins')}</ButtonLink>
          <HiChevronRight />
          <Heading type="tertiary">
            {name}
          </Heading>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-3 items-center py-12">
            <div className="row-span-2 col-span-2 rounded-lg overflow-hidden">
              <img src={cabinImage} alt={`${name} cabin`} />
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
          <div className="grid grid-cols-[1.5fr_1fr] thin:max-tiny:flex thin:max-tiny:flex-col text-stone-700 p-6 gap-12 sm:max-md:gap-1">
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-center">
                <div>
                  <Heading type="tertiary">{name}</Heading>
                  <p className="text-xs text-stone-500">Address</p>
                </div>
                <div className="flex gap-2 items-center">
                  <Bookmark />
                  <HiOutlineShare className="stroke-2 text-2xl" />
                </div>
              </div>
              <div className="flex justify-between items-center gap-6 thin:max-sm:grid thin:max-sm:grid-cols-2">
                <div className="min-w-36 min-h-36 rounded-md flex flex-col justify-center items-center bg-stone-200 text-stone-600">
                  <IoBedOutline className="text-4xl" />
                  <p className="text-xs font-semibold">3 Bedrooms</p>
                </div>
                <div className="min-w-36 min-h-36 rounded-md flex flex-col justify-center items-center bg-stone-200 text-stone-600">
                  <IoBedOutline className="text-4xl" />
                  <p className="text-xs font-semibold">3 Bedrooms</p>
                </div>
                <div className="min-w-36 min-h-36 rounded-md flex flex-col justify-center items-center bg-stone-200 text-stone-600">
                  <IoBedOutline className="text-4xl" />
                  <p className="text-xs font-semibold">3 Bedrooms</p>
                </div>
                <div className="min-w-36 min-h-36 rounded-md flex flex-col justify-center items-center bg-stone-200 text-stone-600">
                  <IoBedOutline className="text-4xl" />
                  <p className="text-xs font-semibold">3 Bedrooms</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-stone-500">
                <Heading type="heading-4">{t('cabin.description.heading')}</Heading>
                <p className="text-sm">{description}</p>
              </div>
              <div>
                <Heading type="heading-4">{t('cabin.amenities.heading')}</Heading>
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
                <Heading type="heading-4">{t('cabin.safety.heading')}</Heading>
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
            <div className="flex justify-center thin:max-tiny:justify-start">
              <div className="xl:w-[60%] ml-12 lg:w-[70%] md:w-[20rem] md:max-lg:pr-12 sm:w-[18rem] sm:max-md:pr-8 thin:max-sm:[24rem] thin:max-sm:ml-0 thin:max-sm:pr-0">
                <CabinCard cabin={cabin as ICabin} />
              </div>
            </div>
            <Map />
          </div>
        </div>
      </div>
    </>
  )
}
