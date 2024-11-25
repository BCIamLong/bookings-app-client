import Heading from "@/components/Heading";
import BookmarksList from "@/features/bookmarks/BookmarksList";

export default function Bookmarks() {
  return (
    <>
      <div className="relative bg-stone-0">
        <div className="brightness-[90%] z-10 h-[6rem] bg-brand-500 w-full rounded-b-3xl"></div>
      </div>
      <div className="pt-8 pb-28 px-6 bg-stone-0">
        <Heading type="tertiary">Your Bookmarks</Heading>
        <BookmarksList />
      </div>
    </>

  )
}
