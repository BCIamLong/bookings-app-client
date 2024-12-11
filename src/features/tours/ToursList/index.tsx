import Heading from "@/components/Heading";
import TourItem from "../TourItem";
import ButtonLink from "@/components/ButtonLink";
import Pagination from "@/components/Pagination";
import { useTours } from "../useTours";
import { ITour } from "@/interfaces";
import Spinner from "@/components/Spinner";
import { useSearchParams } from "react-router-dom";
import { SortOptions } from "@/interfaces/types";
import Empty from "@/components/Empty";
import { appConfig } from "@/config";
import { useRecommendTours } from "../useRecommendTours";
import { useUserSession } from "@/features/auth/useUserSession";

const { PAGE_LIMIT } = appConfig

const { CLIENT_BASE_UTL } = appConfig
// * we will prepare tours data like for trending tours and best tours....
// export default function ToursList({tours}:{tours: Tour[]}) {
export default function ToursList({ type, title, statusType = 'trending' }: { type?: 'full' | 'normal' | 'recommend', title: string, statusType?: string }) {
  const [searchParams] = useSearchParams()
  const sort = searchParams.get('sort') || "none"
  const page = +searchParams.get('page')! || 1
  const typeFilter = searchParams.get('type') || 'none'
  const status = searchParams.get('status') || 'none'
  const date = searchParams.get('date') || 'none'
  const difficulty = searchParams.get('difficulty') || 'none'

  const { user, isLoading: isLoadingUser } = useUserSession()

  const { _id: userId } = user || {}

  const { recommendations, isLoading: isLoadingRecommendations } = useRecommendTours({ userId: userId || 'guest-8dd3c11c-1df4-4f0b-b26d-9d96d80bc28a' })

  let final_tours = []
  const recommendationsByPage = recommendations?.slice((page - 1) * PAGE_LIMIT, PAGE_LIMIT * page)
  const recommendationsByPageCore = [...(recommendationsByPage || [])]
  const remove_tours = []

  const recommendationIds = recommendations?.map((rec) => rec._id)

  const { tours, isLoading, count } = useTours({
    sort: sort as SortOptions, page, type: typeFilter, status, date, difficulty
  })
  console.log(recommendationsByPage)
  tours?.forEach((tour, ind) => {
    if (recommendationIds?.includes(tour._id)) {
      // delete tours[ind]
      return
    }

    if (recommendationsByPage?.length >= PAGE_LIMIT) {
      remove_tours.push(tour)

      return
    }

    recommendationsByPage?.push(tour)
  })

  // console.log('============', remove_tours)
  final_tours = recommendationsByPage?.length >= 6 ? recommendationsByPage : [...(recommendationsByPage || []), ...(remove_tours || [])]

  if (!recommendations?.length) final_tours = tours
  // const { tours, isLoading } = useTours({
  //   sort: 'none', page: 1, limit: 4
  // })

  if (isLoading || isLoadingRecommendations || isLoadingUser) return <Spinner size="normal" />
  if (!tours?.length) return <Empty>No tours found!</Empty>

  if (type === 'normal')
    return <div className="p-12 flex flex-col gap-6 bg-stone-0 h-full">
      <ul className="grid grid-cols-3 gap-x-6 gap-y-6 mb-4 [&>li>div>.decorate>p]:text-[0.6rem] thin:max-sm:grid-cols-2">
        {/* {(page > 1 && recommendations?.length <= 6) ?
          tours?.map((tour: ITour) => <TourItem tour={tour} key={tour._id} type="normal" />) :
          recommendations?.map((tour: ITour) => <TourItem tour={tour} key={tour._id} type="normal" />)} */}
        {/* {tours?.map((tour: ITour) => <TourItem tour={tour} key={tour._id} type="normal" />)} */}
        {status === 'recommend' ? recommendationsByPageCore?.map((tour: ITour) => <TourItem tour={tour} key={tour._id} type="normal" />) :
          final_tours?.map((tour: ITour) => <TourItem tour={tour} key={tour._id} type="normal" />)}
      </ul>
      <div className="mb-1 mt-auto">
        <Pagination count={status === 'recommend' ? recommendationsByPageCore?.length : count} />
      </div>
    </div>

  if (type === 'recommend') return <>{
    Boolean(recommendationsByPageCore?.length) && <div className="p-12 flex flex-col gap-6 bg-stone-0">
      <div className="flex justify-between items-center">
        <Heading type="secondary">{title}</Heading>
        <ButtonLink type="simple1" href={`${CLIENT_BASE_UTL}/tours?status=${statusType}`}>See more &#8594;</ButtonLink>
      </div>
      <ul className="grid grid-cols-4 gap-6 thin:max-sm:grid thin:max-sm:grid-cols-2 [&>li]:shadow-md">
        {recommendationsByPageCore?.map((tour: ITour, i: number) => i < 4 ? <TourItem key={tour._id} tour={tour} /> : null)}
      </ul>
    </div>
  }</>


  return (
    <div className="p-12 flex flex-col gap-6 bg-stone-0">
      <div className="flex justify-between items-center">
        <Heading type="secondary">{title}</Heading>
        <ButtonLink type="simple1" href={`${CLIENT_BASE_UTL}/tours?status=${statusType}`}>See more &#8594;</ButtonLink>
      </div>
      <ul className="grid grid-cols-4 gap-6 thin:max-sm:grid thin:max-sm:grid-cols-2 [&>li]:shadow-md">
        {tours.map((tour: ITour, i: number) => i < 4 ? <TourItem key={tour._id} tour={tour} /> : null)}
      </ul>
    </div>
  )
}
