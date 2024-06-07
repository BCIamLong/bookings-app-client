import Heading from "@/components/Heading"
import Option from "@/components/Option"
import Select from "@/components/Select"
import ReviewItem from "../ReviewItem"
import { ICabin, IReview } from "@/interfaces"
import { Link, useSearchParams } from "react-router-dom"
import { useReviews } from "../useReviews"
import Spinner from "@/components/Spinner"
import { FilterReviewOption, SortReviewOption } from "@/interfaces/types"
import ReviewHeading from "../ReviewHeading"
import { useTranslation } from "react-i18next"

export default function ReviewProfilePopup({ isReviewsOfUser }: { isReviewsOfUser?: boolean }) {
  const { t, i18n } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const filter = searchParams.get('filter') || 5
  const sort = searchParams.get('sort') || 'latest'
  const { reviews, isLoading: isLoadingReviewsPopup } = useReviews({ isReviewsOfUser, filter: filter as FilterReviewOption, sort: sort as SortReviewOption })
  let style = 'grid grid-cols-2 w-[70%] p-6 gap-x-12 gap-y-6 thin:max-sm:flex thin:max-md:flex-col thin:max-md:gap-8'
  if (isReviewsOfUser) style = style + ' h-[27rem] overflow-y-hidden w-full py-2'
  if (!isReviewsOfUser) style = style + ' lg:h-[24rem] w-full thin:max-sm:h-[48rem] sm:h-[42rem] md:h-[40rem]'
  const heightDiv = i18n.language === 'vi-VN' ? 'w-[50rem]' : 'w-[45rem]'

  // if (isLoadingReviewsPopup) return <Spinner size="normal" />

  return (
    <div className={`bg-stone-100 ${heightDiv} thin:max-tiny:max-w-[36rem] p-6`}>
      <div className="flex justify-between p-6 mt-2 items-center thin:max-sm:flex-col thin:max-sm:justify-start thin:max-sm:items-start thin:max-sm:gap-3">
        {isReviewsOfUser ? <Heading type="heading-4">{t('reviews.box.heading')}</Heading> : <div className="[&>div]:p-[0px]"><ReviewHeading /></div>}
        <div className="flex gap-2">
          <Select id="filter-user-reviews" type="sort" onChange={(e) => setSearchParams(params => {
            params.set('filter', e.target.value)
            return params
          })}>
            <Option type="sort" value="5">{t('reviews.box.filter.stars.5')}</Option>
            <Option type="sort" value="4">{t('reviews.box.filter.stars.4')}</Option>
            <Option type="sort" value="3">{t('reviews.box.filter.stars.3')}</Option>
            <Option type="sort" value="2">{t('reviews.box.filter.stars.2')}</Option>
            <Option type="sort" value="1">{t('reviews.box.filter.stars.1')}</Option>
          </Select>

          <Select id="sort-user-reviews" type="sort" onChange={(e) => setSearchParams(params => {
            params.set('sort', e.target.value)
            return params
          })}>
            <Option type="sort" value="">{t('reviews.box.sort.default')}</Option>
            <Option type="sort" value="latest">{t('reviews.box.sort.time-ins')}</Option>
            <Option type="sort" value="oldest">{t('reviews.box.sort.time-des')}</Option>
          </Select>
        </div>
      </div>
      {isLoadingReviewsPopup ? <div className="h-[27rem]"><Spinner size="normal" /></div> :
        <ul className={style + ' overflow-y-scroll'}>
          {reviews?.map((review: IReview) => {
            const { name, _id } = review.cabin as ICabin || {}
            if (!isReviewsOfUser)
              return <ReviewItem item={review} />

            return <Link to={`/cabins/${_id}`} key={review._id} className="h-[7.5rem] [&>li]:h-full">
              <p className="p-2 bg-stone-100 text-xs uppercase font-semibold text-stone-500">{name} </p>
              <ReviewItem key={review._id} item={review} />
            </Link>
          })}
        </ul>}
    </div>
  )
}
