import Heading from "@/components/Heading";
import TourItem from "../TourItem";
import ButtonLink from "@/components/ButtonLink";
import Pagination from "@/components/Pagination";
import { useTours } from "../useTours";
import { ITour } from "@/interfaces";
import Spinner from "@/components/Spinner";
import { useParams, useSearchParams } from "react-router-dom";
import { SortOptions } from "@/interfaces/types";
import Empty from "@/components/Empty";
import { appConfig } from "@/config";
import { useRecommendTours } from "../useRecommendTours";
import { useUserSession } from "@/features/auth/useUserSession";
import { useState } from "react";

const { PAGE_LIMIT } = appConfig

const { CLIENT_BASE_UTL } = appConfig
// * we will prepare tours data like for trending tours and best tours....
// export default function ToursList({tours}:{tours: Tour[]}) {
export default function ToursList({ type, title, statusType = 'trending' }: { type?: 'full' | 'normal' | 'recommend' | 'recommend-similar-tours', title: string, statusType?: string }) {
  const [searchParams] = useSearchParams(window.location.search)
  const sort = searchParams.get('sort') || "none"
  const page = +searchParams.get('page')! || 1
  const typeFilter = searchParams.get('type') || 'none'
  const status = searchParams.get('status') || 'none'
  const date = searchParams.get('date') || 'none'
  const difficulty = searchParams.get('difficulty') || 'none'
  const search = searchParams.get('search') || 'none'
  const { id } = useParams()

  const { recommendations: recommendationSimilarTours, isLoading: isLoadingRecommendationSimilarTours } = useRecommendTours({ tourId: id })

  const { user, isLoading: isLoadingUser } = useUserSession()

  const { _id: userId } = user || {}

  const { recommendations, recommendations_core, isLoading: isLoadingRecommendations } = useRecommendTours({ userId: userId })
  let final_tours = []

  // const remove_tours = []


  const { tours, isLoading, count } = useTours({
    sort: sort as SortOptions, page, type: typeFilter, status, date, difficulty
  })

  const recommendationsByPage = recommendations?.slice((page - 1) * PAGE_LIMIT, PAGE_LIMIT * page)
  const recommendationsByPageCore = recommendations_core?.slice((page - 1) * PAGE_LIMIT, PAGE_LIMIT * page)




  // console.log('============', remove_tours)
  final_tours = recommendationsByPage

  if (!recommendations?.length || sort !== 'none' ||
    typeFilter !== 'none' ||
    (status !== 'none' && status !== 'recommend') ||
    date !== 'none' ||
    difficulty !== 'none' || search !== 'none') final_tours = tours
  // const { tours, isLoading } = useTours({
  //   sort: 'none', page: 1, limit: 4
  // })

  if (isLoading || isLoadingRecommendations || isLoadingUser || isLoadingRecommendationSimilarTours) return <Spinner size="normal" />
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
        <Pagination count={status === 'recommend' ? recommendations_core?.length : count} />
      </div>
    </div>

  if (type === 'recommend') return <>{
    Boolean(recommendationsByPageCore?.length) && <div className="p-12 flex flex-col gap-6 bg-stone-0">
      <div className="flex justify-between items-center [&>h1]:text-brand-600">
        <Heading type="secondary">{title}</Heading>
        <ButtonLink type="simple1" href={`${CLIENT_BASE_UTL}/tours?status=${statusType}`}>See more &#8594;</ButtonLink>
      </div>
      <ul className="grid grid-cols-4 gap-6 thin:max-sm:grid thin:max-sm:grid-cols-2 [&>li]:shadow-md">
        {recommendationsByPageCore?.map((tour: ITour, i: number) => i < 4 ? <TourItem key={tour._id} tour={tour} /> : null)}
      </ul>
    </div>
  }</>

  if (type === 'recommend-similar-tours') return <>{
    Boolean(recommendationSimilarTours?.length) && <div className="p-12 flex flex-col gap-6 bg-stone-0">
      <div className="flex justify-between items-center [&>h1]:text-brand-600">
        <Heading type="secondary">{title}</Heading>
        {/* <ButtonLink type="simple1" href={`${CLIENT_BASE_UTL}/tours?status=${statusType}`}>See more &#8594;</ButtonLink> */}
      </div>
      <ul className="grid grid-cols-4 gap-6 thin:max-sm:grid thin:max-sm:grid-cols-2 [&>li]:shadow-md">
        {recommendationSimilarTours?.map((tour: ITour, i: number) => i < 4 ? <TourItem key={tour._id} tour={tour} /> : null)}
      </ul>
    </div>
  }</>


  return (
    <div className="p-12 flex flex-col gap-6 bg-stone-0">
      <div className="flex justify-between items-center [&>h1]:text-brand-600">
        <Heading type="secondary">{title}</Heading>
        <ButtonLink type="simple1" href={`${CLIENT_BASE_UTL}/tours?status=${statusType}`}>See more &#8594;</ButtonLink>
      </div>
      <ul className="grid grid-cols-4 gap-6 thin:max-sm:grid thin:max-sm:grid-cols-2 [&>li]:shadow-md">
        {tours.map((tour: ITour, i: number) => i < 4 ? <TourItem key={tour._id} tour={tour} /> : null)}
      </ul>
    </div>
  )
}
