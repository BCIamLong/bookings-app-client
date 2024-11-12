import Heading from "@/components/Heading";
import CategoryItem from "../CategoryItem";
import ButtonLink from "@/components/ButtonLink";
import { appConfig } from "@/config";

const { TYPES, DIFFICULTY, CLIENT_BASE_UTL } = appConfig

export default function CategoriesList({ type }: { type?: 'normal' | 'full' }) {

  if (type === 'normal') return (
    <div className="pt-16 px-12 flex flex-col bg-stone-0">
      <ul className=" grid grid-cols-3 gap-4 [&>li>div>img]:w-full">
        {TYPES.map(type => <CategoryItem title={type[0]} numTours={12} image={type[1]} />)}
        {DIFFICULTY.map(d => <CategoryItem title={d[0]} numTours={12} image={d[1]} />)}
      </ul>
    </div>
  )

  return (
    <div className="pt-16 px-12 flex flex-col gap-6 bg-stone-0">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <Heading type="secondary">Explore our tours</Heading>
          <p className="text-sm text-stone-500">These popular types of tour have a lot to offer</p>
        </div>
        <ButtonLink type="simple1" href={`${CLIENT_BASE_UTL}/tours`}>See more &#8594;</ButtonLink>
      </div>
      <ul className="flex gap-4">
        {TYPES.map(type => <CategoryItem title={type[0]} numTours={12} image={type[1]} />)}
        {DIFFICULTY.map(d => <CategoryItem title={d[0]} numTours={12} image={d[1]} />)}
      </ul>
    </div>
  )
}
