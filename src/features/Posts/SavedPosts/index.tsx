import PostsItem from "../PostsItem";

export default function SavedPosts() {
  return (
    <div className="overflow-scroll no-scrollbar h-[90vh]">
      <PostsItem isSaved={true} />
      <PostsItem isSaved={true} />
    </div>
  )
}
