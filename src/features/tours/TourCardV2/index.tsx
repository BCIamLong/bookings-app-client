import { HiOutlineBuildingOffice, HiOutlinePhone } from "react-icons/hi2";


import Button from "../../../components/Button";
import { IBooking, ITour } from "../../../interfaces";
// import { useBookCabin } from "../../bookings/useBookCabin";
import Spinner from "../../../components/Spinner";
import { useUserBookings } from "@/features/bookings/useUserBookings";
import ButtonLink from "@/components/ButtonLink";
import { useUserSession } from "@/features/auth/useUserSession";
import Select from "@/components/Select";
import Option from "@/components/Option";
import { FormEvent, useState } from "react";
import Label from "@/components/form/Label";
import { useBookings } from "@/features/bookings/useBookings";
import { useTranslation } from "react-i18next";
import { useBookTour } from "@/features/bookings/useBookTour";
import { StartDate } from "@/interfaces/ITour";

export default function TourCardV2({ tour }: { tour: ITour }) {
  const { t, i18n } = useTranslation()
  const locale = i18n.language.split('-')[0]
  //! count is check the tour is booked by this user? (not checkout)
  // ! isCabinBooked is check the tour has any bookings (not checkout) or not
  const { count, isLoading, bookings: bookingsOfUser } = useUserBookings({ status: { operation: 'ne', value: 'checked-out' }, cabin: true })
  const { count: isNotAllowUserBook, isLoading: isLoadingUserBookings } = useUserBookings({ status: { operation: 'ne', value: 'checked-out' } })
  const { isBooking, bookTour } = useBookTour()
  const { user, isLoading: isLoadingUser } = useUserSession()
  const { count: isCabinBooked, isLoading: isLoadingBookings, bookings } = useBookings({ status: { operation: 'ne', value: 'checked-out' } })

  const { _id: tourId, price, name, description, imageCover, maxGroupSize, startDates: startDatesTmp, duration, type } = tour || {}
  const [guests, setGuests] = useState(1)
  // const [days, setDays] = useState(3)
  const [startDate, setStartDate] = useState(0)
  const startDates = startDatesTmp?.filter(date => new Date(date.date) > new Date()).sort((a: StartDate, b: StartDate) => new Date(a.date).getTime() - new Date(b.date).getTime())
  // console.log(startDates[1])

  let isTourOfThisDateBooked;
  bookings?.forEach((b: IBooking) => {
    if (b.startDate === startDatesTmp[startDate]?.date) isTourOfThisDateBooked = true
  })
  // const isUserBookedThisTour = startDatesTmp?.[startDate]?.date === bookingsOfUser?.[0]?.startDate
  // console.log('------', isTourOfThisDateBooked)

  // const price = regularPrice * days * guests
  const discountPrice = 0
  const startDateVal = startDates[startDate].date
  // console.log(startDateVal, new Date(startDateVal).getTime())
  const endDate = new Date(new Date(startDateVal).getTime() + duration * 24 * 60 * 60 * 1000).toISOString()
  // console.log(isNotAllowUserBook, count)
  const totalPrice = price * guests

  const participantsVal = startDates.reduce((acc, date, ind) => startDate === ind ? acc + date.participants : acc, 0)

  const isSlotFulled = !(maxGroupSize - participantsVal)
  // console.log(imageCover)

  const handleClick = async function (e: FormEvent) {
    e.preventDefault()
    if (!guests) return
    bookTour({ cabinId: tourId, cabinPrice: price, regularPrice: price + (discountPrice * price), name, description, image: imageCover, endDate: new Date(endDate), startDate: startDateVal, numGuests: guests, numNights: duration, locale })

  }
  // if (isLoading || isLoadingUser || isLoadingBookings) return <Spinner size="normal" />
  // console.log(count, isCabinBooked, isCabinBooked, isNotAllowUserBook, isSlotFulled)
  // console.log(!isSlotFulled)
  // console.log(isCabinBooked)
  const isTourBooked = type !== 'group' ? !isCabinBooked : !isCabinBooked || !isSlotFulled

  const isAllowGuestToBook = (isTourBooked && !isSlotFulled) && !count

  // console.log('------', isAllowGuestToBook, !isTourOfThisDateBooked, isUserBookedThisTour)
  return (
    <div className={`relative min-h-24 bg-stone-0 text-stone-700 shadow-md thin:max-sm:px-6 thin:max-sm:w-[17.4rem] shadow-stone-300 px-4 py-6 ${(count && isCabinBooked) || isCabinBooked || isNotAllowUserBook ? ' bg-stone-200' : ''}`}>
      <div className="absolute top-[-2rem] left-0 text-xs uppercase text-brand-700 border-dashed border-brand-500 border-2 px-2 hover:bg-brand-200 transition-all duration-300">
        <a target="_blank" href="https://docs.stripe.com/testing#testing-interactively">Want to pay? let's click here and Use this TEST CARD to pay</a>
      </div>
      {isLoading || isLoadingUser || isLoadingBookings || isLoadingUserBookings ? <Spinner size="normal" /> :
        <>
          {Boolean(count) && Boolean(isCabinBooked) && <p className="py-1 px-2 text-xs uppercase font-semibold text-stone-50 bg-green-500 rounded-lg flex justify-center items-center mb-3">Payment Completed</p>}
          <p className="pb-4 border-b-[1.5px] font-bold border-stone-300">
            <span className="line-through text-stone-400">$ {totalPrice} </span>
            <span> &rarr; $ {totalPrice} </span>
            <span>(-{0}%)</span>
          </p>
          {/* <p className="flex gap-3 justify-between px-0 pb-6 pt-3">
            <Label type="search" labelFor="guests">Type</Label>
            <p className="text-stone-500 capitalize font-semibold">{type}</p>
          </p>
          <p className="flex gap-3 justify-between ">
            <Label type="search" labelFor="guests">Duration</Label>
            <p className="text-stone-500 font-semibold">{duration}</p>
          </p> */}
          <div className={`pb-6 pt-6 flex flex-col gap-6 `}>
            <div className="flex flex-col gap-3">
              <Label type="search" labelFor="guests">Start Dates</Label>
              <Select type="sort" id="dates" defaultValue='3' onChange={(e) => setStartDate(+e.target.value)} disabled={false}>
                {
                  startDates.map((date, ind) => new Date(date.date) > new Date() ? <Option key={ind} type="sort" value={`${ind}`}>{new Date(date.date).toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' })}</Option> : null)
                }
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label type="search" labelFor="guests">Group Size</Label>
              <input id='guests' type="number" value={maxGroupSize}
                className="py-2 px-8 text-stone-700 bg-stone-0 text-sm font-semibold border-[1.5px] rounded-md border-stone-300 focus:outline-none"
                disabled={true} />
            </div>
            {/* 
             * 1 for group type we will display the participants and display a message that like 'this tour has 3 slots rest'
             * 2 for private type we display the participants and also allow the user can edit this participants and we will increase the price as the participants increase because this is only for one user pay
             * 3 for personal we just display the participants as 1 and dis play a message that like 'this tour has 1 slot rest'
            */}
            <div className="flex flex-col gap-3">
              <Label type="search" labelFor="guests">Current Participants</Label>
              <input id='guests' type="number" min={1} max={maxGroupSize} value={participantsVal}
                className="py-2 px-8 text-stone-700 bg-stone-0 text-sm font-semibold border-[1.5px] rounded-md border-stone-300 focus:outline-none"
                onChange={(e) => setGuests(+e.target.value)
                } disabled={true} />
            </div>
            {!isSlotFulled && type === 'group' && <p>This tour has {maxGroupSize - participantsVal} slots available</p>}
            <div className="flex flex-col gap-3">
              <Label type="search" labelFor="guests">Participants</Label>
              <input id='guests' type="number" min={1} max={maxGroupSize} value={guests}
                className="py-2 px-8 text-stone-700 bg-stone-0 text-sm font-semibold border-[1.5px] rounded-md border-stone-300 focus:outline-none"
                onChange={(e) => setGuests(+e.target.value)
                } disabled={isTourOfThisDateBooked || type === 'group'} />
            </div>
            {type === 'group' && <p>You can only book for 1 participant</p>}
            {
              isSlotFulled ? type === 'group' ? 'Sorry, this tour is full slots' : null :
                type === 'private' &&
                <p>You can edit the participants</p>

            }
          </div>

          {
            (isSlotFulled && type === 'group') ? null :
              isNotAllowUserBook && !count && user ? <div className=""><Button size="small" type="brand">{t('cabin.card.notifies.your-booked')}</Button></div> :
                <>
                  {/* *** */}
                  {Boolean(isCabinBooked) && !count && (isSlotFulled || type !== 'group') && isTourOfThisDateBooked && <div className=""><Button size="small" type="brand">
                    {/* {t('cabin.card.notifies.cabin-booked')} */}
                    {type !== 'group' ? "This tour is already booked" : "This tour is full slot"}
                  </Button></div>}

                  {Boolean(isCabinBooked) && Boolean(count)
                    // && !(type === 'group' && participantsVal > 0) 
                    && <div className="w-[62%]">
                      <ButtonLink href='/profile/bookings' type="primary" size="small">
                        {t('cabin.card.btn.see')}
                      </ButtonLink>
                    </div>}

                  {
                    (!user ?
                      <div className={`${i18n.language === 'vi-VN' ? 'w-[70%]' : 'w-[62%]'}`}>
                        <ButtonLink type="primary" href="/login">
                          {t('cabin.card.btn.login')}
                        </ButtonLink>
                      </div>
                      :
                      //! count is check the tour is booked by this user? (not checkout)
                      // ! isCabinBooked is check the tour has any bookings (not checkout) or not
                      // (((isCabinBooked && !isSlotFulled) && !count))
                      (isAllowGuestToBook || (!isTourOfThisDateBooked && !count)) ?
                        // || ((isCabinBooked && !isSlotFulled) && Boolean(count))) //* this is not necessary

                        <Button type="brand" size="small" onClick={handleClick}>
                          {isBooking ?
                            <Spinner size="small" />
                            :
                            `${t('cabin.card.btn.default')}`
                          }
                        </Button> : null
                    )
                  }
                </>
          }

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
    </div >
  )
}
