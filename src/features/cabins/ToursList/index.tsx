import Heading from "@/components/Heading";
import TourItem from "../TourItem";
import ButtonLink from "@/components/ButtonLink";

// * we will prepare tours data like for trending tours and best tours....
// export default function ToursList({tours}:{tours: Tour[]}) {
export default function ToursList({ title }: { title: string }) {
  return (
    <div className="p-12 flex flex-col gap-6 bg-stone-0">
      <div className="flex justify-between items-center">
        <Heading type="secondary">{title}</Heading>
        <ButtonLink type="simple1" href="#">See more &#8594;</ButtonLink>
      </div>
      <ul className="flex gap-6 thin:max-sm:grid thin:max-sm:grid-cols-2">
        <TourItem />
        <TourItem />
        <TourItem />
        <TourItem />
      </ul>
    </div>
  )
}
