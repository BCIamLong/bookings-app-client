import { IReview, IUser } from "@/interfaces";
import { format } from "date-fns";
import { HiStar } from "react-icons/hi2";

export default function ReviewItem({ item }: { item: IReview }) {
  const { createdAt, review, rating, user } = item
  const { avatar, fullName } = user as IUser || {}
  const avatarFormat = avatar === 'default-avatar.jpg' ? '/default-avatar.jpg' : avatar

  return (
    <li className="flex flex-col gap-3 border-b-[1px] pb-6 border-stone-300 xl:h-48 lg:h-40 md:h-36 sm:h-36 h-28 tiny:h-32 overflow-y-hidden">
      <div className="flex gap-4 text-stone-700">
        <img className="rounded-full w-12" src={avatarFormat} alt="user avatar" />
        <div>
          <p className="font-semibold text-sm">
            {fullName}
          </p>
          <p className="text-xs text-stone-500">{format(createdAt, 'MMM dd yyyy')}</p>
        </div>
        <div className="flex items-center gap-1 ml-auto mr-3">
          <p>{rating}</p>
          <HiStar className="text-xl text-stone-600" /></div>
      </div>
      <p className="text-sm leading-5 text-stone-600">{review}</p>
    </li>
  )
}
