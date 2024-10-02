import Heading from "@/components/Heading";
import TourItem from "../TourItem";
import ButtonLink from "@/components/ButtonLink";
import Pagination from "@/components/Pagination";

// * we will prepare tours data like for trending tours and best tours....
// export default function ToursList({tours}:{tours: Tour[]}) {
export default function ToursList({ type, title }: { type?: 'full' | 'normal', title: string }) {

  if (type === 'normal')
    return <div className="p-12 flex flex-col gap-6 bg-stone-0">
      <ul className="grid grid-cols-3 gap-x-6 gap-y-6 mb-4 [&>li>div>.decorate>p]:text-[0.6rem] thin:max-sm:grid-cols-2">
        <TourItem type="normal" />
        <TourItem type="normal" />
        <TourItem type="normal" />
        <TourItem type="normal" />
        <TourItem type="normal" />
        <TourItem type="normal" />
      </ul>
      <Pagination count={12} />
    </div>

  return (
    <div className="p-12 flex flex-col gap-6 bg-stone-0">
      <div className="flex justify-between items-center">
        <Heading type="secondary">{title}</Heading>
        <ButtonLink type="simple1" href="#">See more &#8594;</ButtonLink>
      </div>
      <ul className="flex gap-6 thin:max-sm:grid thin:max-sm:grid-cols-2 [&>li]:shadow-md">
        <TourItem />
        <TourItem />
        <TourItem />
        <TourItem />
      </ul>
    </div>
  )
}
