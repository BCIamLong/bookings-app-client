import Heading from "@/components/Heading"
import Option from "@/components/Option"
import Select from "@/components/Select"
import ReviewItem from "../ReviewItem"
import { ICabin, IReview } from "@/interfaces"
import { Link, useSearchParams } from "react-router-dom"
import { useReviews } from "../useReviews"
import Spinner from "@/components/Spinner"
import { FilterReviewOption, SortReviewOption } from "@/interfaces/types"

export default function ReviewProfilePopup({ isReviewsOfUser }: { isReviewsOfUser?: boolean }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const filter = searchParams.get('filter') || 5
  const sort = searchParams.get('sort') || 'latest'
  const { reviews, isLoading: isLoadingReviewsPopup } = useReviews({ isReviewsOfUser, filter: filter as FilterReviewOption, sort: sort as SortReviewOption })
  let style = 'grid grid-cols-2 w-[70%] p-6 gap-x-12 gap-y-6'
  if (isReviewsOfUser) style = style + ' h-[27rem] overflow-y-hidden w-full py-2'

  // if (isLoadingReviewsPopup) return <Spinner size="normal" />

  return (
    <div className="bg-stone-100 w-[45rem] p-6">
      <div className="flex justify-between p-6 mt-2">
        <Heading type="heading-4">Your reviews</Heading>
        <div className="flex gap-2">
          <Select id="filter-user-reviews" type="sort" onChange={(e) => setSearchParams(params => {
            params.set('filter', e.target.value)
            return params
          })}>
            <Option type="sort" value="5">5 Stars</Option>
            <Option type="sort" value="4">4 Stars</Option>
            <Option type="sort" value="3">3 Stars</Option>
            <Option type="sort" value="2">2 Stars</Option>
            <Option type="sort" value="1">1 Star</Option>
          </Select>

          <Select id="sort-user-reviews" type="sort" onChange={(e) => setSearchParams(params => {
            params.set('sort', e.target.value)
            return params
          })}>
            <Option type="sort" value="">Sort by</Option>
            <Option type="sort" value="latest">Sort by time (latest)</Option>
            <Option type="sort" value="oldest">Sort by time (oldest)</Option>
          </Select>
        </div>
      </div>
      {isLoadingReviewsPopup ? <div className="h-[27rem]"><Spinner size="normal" /></div> :
        <ul className={style + ' overflow-y-scroll'}>
          {reviews?.map((review: IReview) => {
            const { name, _id } = review.cabin as ICabin || {}
            return <Link to={`/cabins/${_id}`} key={review._id} className="h-[7.5rem] [&>li]:h-full">
              <p className="p-2 bg-stone-100 text-xs uppercase font-semibold text-stone-500">{name} </p>
              <ReviewItem key={review._id} item={review} />
            </Link>
          })}
        </ul>}
    </div>
  )
}
