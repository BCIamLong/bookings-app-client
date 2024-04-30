import Heading from "@/components/Heading";
import BookmarksList from "@/features/bookmarks/BookmarksList";

export default function Bookmarks() {
  return (<div className="p-6 bg-stone-0">
    <Heading type="tertiary">Your Bookmarks</Heading>
    <BookmarksList />
  </div>

  )
}
