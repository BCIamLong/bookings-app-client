import Heading from "@/components/Heading";
import CategoryItem from "../CategoryItem";
import ButtonLink from "@/components/ButtonLink";

export default function CategoriesList() {
  return (
    <div className="pt-16 px-12 flex flex-col gap-6 bg-stone-0">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <Heading type="secondary">Explore our tours</Heading>
          <p className="text-sm text-stone-500">These popular types of tour have a lot to offer</p>
        </div>
        <ButtonLink type="simple1" href="#">See more &#8594;</ButtonLink>
      </div>
      <ul className="flex gap-4">
        <CategoryItem title="Challenges" numTours={12} />
        <CategoryItem title="Challenges" numTours={12} />
        <CategoryItem title="Challenges" numTours={12} />
        <CategoryItem title="Challenges" numTours={12} />
        <CategoryItem title="Challenges" numTours={12} />
        <CategoryItem title="Challenges" numTours={12} />
      </ul>
    </div>
  )
}
