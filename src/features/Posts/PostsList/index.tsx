import PostsItem from "../PostsItem";

export default function PostsList() {
  return (
    <div className="overflow-scroll no-scrollbar h-[90vh]">
      <PostsItem />
      <PostsItem />
    </div>
  )
}
