import { HiOutlineShare, HiChevronRight } from "react-icons/hi2"
import { IoBedOutline } from "react-icons/io5";
import { GiKnifeFork } from "react-icons/gi";
import Heading from "../../../components/Heading"
import CabinCard from "@/features/cabins/CabinCard";
import ButtonLink from "../../../components/ButtonLink";
import Spinner from "../../../components/Spinner";
import Map from "@/components/Map";
import Bookmark from "@/features/bookmarks/Bookmark";
import { useTranslation } from "react-i18next";
import { useTour } from "../useTour";
import { ITour } from "@/interfaces";
import TourCard from "../TourCard";

export default function TourDetail() {
  const { t } = useTranslation()
  const { tour, isLoading }: { tour: ITour, isLoading: boolean } = useTour()
  const { name, imageCover } = tour || {}
  // const tourImage = image?.startsWith('tour-') ? `/imgs/tours/${image}` : image
  const tourImage = imageCover
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
          <ButtonLink type="simple" href="/tours">Tours</ButtonLink>
          <HiChevronRight />
          <Heading type="tertiary">
            {name}
          </Heading>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-3 items-center py-12">
            <div className="row-span-2 col-span-2 rounded-lg overflow-hidden">
              <img src={tourImage} alt={`${name} tour`} />
            </div>
            <div className={classStyle}>
              <img src={tour.images[0]} alt="" />
            </div>
            <div className={classStyle}>
              <img src={tour.images[1]} alt="" />
            </div>
            <div className={classStyle}>
              <img src={tour.images[2]} alt="" />
            </div>
            <div className={classStyle}>
              <img src={tour.images[0]} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-[1.5fr_1fr] thin:max-tiny:flex thin:max-tiny:flex-col text-stone-700 p-6 gap-12 sm:max-md:gap-1">
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xl text-brand-600 font-bold leading-10">{name}</p>
                  <p className="text-sm text-stone-500">{tour.startLocation.address}</p>
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
                <p className="text-xl text-brand-600 font-bold leading-10">Tour description</p>
                <p className="">{tour.description}</p>
              </div>
              <div>
                <p className="text-xl text-brand-600 font-bold leading-10">Quick Facts</p>
                <div className="grid grid-cols-2 gap-4 py-3 w-[80%] text-sm text-stone-600 mt-3">
                  <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-3 uppercase font-semibold text-lg">
                      <GiKnifeFork className="text-brand-600" />
                      <p>Next Date</p>
                    </div>
                    <p className="text-[1rem] text-stone-500">{new Date(tour.startDates[0].date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-3 uppercase font-semibold text-lg">
                      <GiKnifeFork className="text-brand-600" />
                      <p>Difficult</p>
                    </div>
                    <p className="text-[1rem] text-stone-500">{tour.difficulty}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-3 uppercase font-semibold text-lg">
                      <GiKnifeFork className="text-brand-600" />
                      <p>Participants</p>
                    </div>
                    <p className="text-[1rem] text-stone-500">{tour.maxGroupSize}</p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-3 uppercase font-semibold text-lg">
                      <GiKnifeFork className="text-brand-600" />
                      <p>Rating</p>
                    </div>
                    <p className="text-[1rem] text-stone-500">{tour.ratingsAverage}</p>
                  </div>
                </div>
              </div>
              {/* <div>
                <Heading type="heading-4">{t('tour.safety.heading')}</Heading>
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
              </div> */}
            </div>
            <div className="flex justify-center thin:max-tiny:justify-start">
              <div className="xl:w-[60%] ml-12 lg:w-[70%] md:w-[20rem] md:max-lg:pr-12 sm:w-[18rem] sm:max-md:pr-8 thin:max-sm:[24rem] thin:max-sm:ml-0 thin:max-sm:pr-0">
                {/* <CabinCard cabin={cabin as ICabin} /> */}
                <TourCard tour={tour} />
              </div>
            </div>
            <Map />
          </div>
        </div>
      </div>
    </>
  )
}
