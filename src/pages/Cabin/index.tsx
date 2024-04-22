import { HiChevronRight } from "react-icons/hi2";

import Heading from "../../components/Heading";
import CabinDetail from "../../features/cabins/CabinDetail";
import ButtonLink from "../../components/ButtonLink";

export default function Cabin() {
  return (
    <div className="px-6 py-8">
      <div className="flex gap-1 items-center text-stone-500 ">
        <ButtonLink type="simple" href="/">Home</ButtonLink>
        <HiChevronRight />
        <ButtonLink type="simple" href="/cabins">Cabins</ButtonLink>
        <HiChevronRight />
        <Heading type="tertiary">
          Name of cabin
        </Heading>
      </div>

      <CabinDetail />
    </div>
  )
}
