import Heading from "@/components/Heading";
import TourItem from "../TourItem";
import ButtonLink from "@/components/ButtonLink";
import Pagination from "@/components/Pagination";
import { useTours } from "../useTours";
import { ITour } from "@/interfaces";
import Spinner from "@/components/Spinner";
import { useSearchParams } from "react-router-dom";
import { SortOptions } from "@/interfaces/types";

// * we will prepare tours data like for trending tours and best tours....
// export default function ToursList({tours}:{tours: Tour[]}) {
export default function ToursList({ type, title }: { type?: 'full' | 'normal', title: string }) {
  const [searchParams] = useSearchParams()
  const sort = searchParams.get('sort') || "none"
  const page = +searchParams.get('page')! || 1

  const { tours, isLoading, count } = useTours({
    sort: sort as SortOptions, page
  })
  // const { tours, isLoading } = useTours({
  //   sort: 'none', page: 1, limit: 4
  // })

  if (isLoading) return <Spinner size="normal" />

  if (type === 'normal')
    return <div className="p-12 flex flex-col gap-6 bg-stone-0 h-full">
      <ul className="grid grid-cols-3 gap-x-6 gap-y-6 mb-4 [&>li>div>.decorate>p]:text-[0.6rem] thin:max-sm:grid-cols-2">
        {tours.map((tour: ITour) => <TourItem tour={tour} type="normal" />)}
      </ul>
      <div className="mb-1 mt-auto">

        <Pagination count={count} />
      </div>
    </div>

  return (
    <div className="p-12 flex flex-col gap-6 bg-stone-0">
      <div className="flex justify-between items-center">
        <Heading type="secondary">{title}</Heading>
        <ButtonLink type="simple1" href="#">See more &#8594;</ButtonLink>
      </div>
      <ul className="grid grid-cols-4 gap-6 thin:max-sm:grid thin:max-sm:grid-cols-2 [&>li]:shadow-md">
        {tours.map((tour: ITour, i: number) => i < 4 ? <TourItem tour={tour} /> : null)}
      </ul>
    </div>
  )
}
