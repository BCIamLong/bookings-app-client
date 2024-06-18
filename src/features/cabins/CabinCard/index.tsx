import { HiOutlineBuildingOffice, HiOutlinePhone } from "react-icons/hi2";


import Button from "../../../components/Button";
import { ICabin } from "../../../interfaces";
import { useBookCabin } from "../../bookings/useBookCabin";
import Spinner from "../../../components/Spinner";
import { useUserBookings } from "@/features/bookings/useUserBookings";
import ButtonLink from "@/components/ButtonLink";
import { useUserSession } from "@/features/auth/useUserSession";
import Select from "@/components/Select";
import Option from "@/components/Option";
import { useState } from "react";
import Label from "@/components/form/Label";
import { useBookings } from "@/features/bookings/useBookings";
import { useTranslation } from "react-i18next";

export default function CabinCard({ cabin }: { cabin: ICabin }) {
  const { t, i18n } = useTranslation()
  const locale = i18n.language.split('-')[0]

  const { count, isLoading } = useUserBookings({ status: { operation: 'ne', value: 'checked-out' }, cabin: true })
  const { count: isNotAllowUserBook, isLoading: isLoadingUserBookings } = useUserBookings({ status: { operation: 'ne', value: 'checked-out' } })
  const { isBooking, bookCabin } = useBookCabin()
  const { user, isLoading: isLoadingUser } = useUserSession()
  const { count: isCabinBooked, isLoading: isLoadingBookings } = useBookings({ status: { operation: 'ne', value: 'checked-out' } })

  const { _id: cabinId, regularPrice, discount, name, description, image, maxCapacity } = cabin || {}
  const [guests, setGuests] = useState(maxCapacity)
  const [days, setDays] = useState(3)

  const price = regularPrice * days * guests
  const discountPrice = price - Math.round(price * (discount / 100))
  const startDate = new Date()
  const endDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000)
  console.log(isNotAllowUserBook, count)

  const handleClick = async function () {
    if (!guests || !days) return

    bookCabin({ cabinId, cabinPrice: regularPrice, regularPrice: discountPrice, name, description, image, endDate, startDate, numGuests: guests, numNights: days, locale })

  }
  // if (isLoading || isLoadingUser || isLoadingBookings) return <Spinner size="normal" />

  return (
    <div className={`min-h-24 bg-stone-0 text-stone-700 shadow-md thin:max-sm:px-6 thin:max-sm:w-[17.4rem] shadow-stone-300 px-4 py-6 ${(count && isCabinBooked) || isCabinBooked || isNotAllowUserBook ? ' bg-stone-200' : ''}`}>
      {isLoading || isLoadingUser || isLoadingBookings || isLoadingUserBookings ? <Spinner size="normal" /> :
        <>
          {Boolean(count) && Boolean(isCabinBooked) && <p className="py-1 px-2 text-xs uppercase font-semibold text-stone-50 bg-green-500 rounded-lg flex justify-center items-center mb-3">Payment Completed</p>}
          <p className="pb-4 border-b-[1.5px] font-bold border-stone-300">
            <span className="line-through text-stone-400">$ {price} </span>
            <span> &rarr; $ {discountPrice} </span>
            <span>(-{discount}%)</span>
          </p>
          <div className={`py-6 flex flex-col gap-6 ${(count && isCabinBooked) || isCabinBooked || isNotAllowUserBook ? 'blur-sm' : ''}`}>
            <Select type="sort" id="days" defaultValue='3' onChange={(e) => setDays(+e.target.value)} disabled={(Boolean(count) && isCabinBooked) || Boolean(isCabinBooked) || isNotAllowUserBook}>
              <Option type="sort" value="3">{t('cabin.card.days.3')}</Option>
              <Option type="sort" value="7">{t('cabin.card.days.7')}</Option>
              <Option type="sort" value="14">{t('cabin.card.days.14')}</Option>
            </Select>
            <div className="flex flex-col gap-3">
              <Label type="search" labelFor="guests">{t('cabin.card.guests.label')}</Label>
              <input id='guests' type="number" min={1} max={maxCapacity} value={String(guests)}
                className="py-2 px-8 text-stone-700 bg-stone-0 text-sm font-semibold border-[1.5px] rounded-md border-stone-300 focus:outline-none"
                onChange={(e) => setGuests(+e.target.value)
                } disabled={(Boolean(count) && isCabinBooked) || Boolean(isCabinBooked) || isNotAllowUserBook} />
            </div>
          </div>
          {isNotAllowUserBook && !count ? <div className=""><Button size="small" type="primary">{t('cabin.card.notifies.your-booked')}</Button></div> :
            <>
              {Boolean(isCabinBooked) && !count && <div className=""><Button size="small" type="primary">{t('cabin.card.notifies.cabin-booked')}</Button></div>}

              {Boolean(isCabinBooked) && Boolean(count) && <div className="w-[62%]">
                <ButtonLink href='/profile/bookings' type="primary" size="small">{t('cabin.card.btn.see')}</ButtonLink>
              </div>}

              {((!isCabinBooked && !count) || (!isCabinBooked && Boolean(count))) && (!user ? <div className="w-[62%]"><ButtonLink type="primary" href="/login">Login to book</ButtonLink></div> : <Button type="primary" size="small" onClick={handleClick}>
                {isBooking ? <Spinner size="small" /> : `${t('cabin.card.btn.default')}`}
              </Button>)}
            </>}

          {/* {!isCabinBooked &&
        (!count ? !user ? <div className="w-[62%]"><ButtonLink type="primary" href="/login">Login to book</ButtonLink></div> : <Button type="primary" size="small" onClick={handleClick}>
          {isBooking ? <Spinner size="small" /> : 'Reserve Now'}
        </Button> : <div className="w-[62%]">
          <ButtonLink href='/profile/bookings' type="primary" size="small">See your bookings</ButtonLink>
        </div>)
      } */}
          <div className="flex justify-between items-center py-6 text-xs font-semibold">
            <div className="flex items-center gap-2">
              <HiOutlineBuildingOffice className="text-sm" />
              <p>{t('cabin.links.property')}</p>
            </div>
            <div className="flex items-center gap-2">
              <HiOutlinePhone className="text-sm" />
              <p>{t('cabin.links.contact')}</p>
            </div>
          </div>
        </>
      }
    </div>
  )
}
