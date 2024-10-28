import Spinner from "@/components/Spinner";
import PostsItem from "../PostsItem";
import { usePosts } from "../usePosts";
import { IPost } from "@/interfaces";

export default function PostsList() {
  const { posts, isLoading } = usePosts({ sort: 'none' })

  if (isLoading) return <Spinner size="normal" />

  return (
    <div className="overflow-scroll no-scrollbar h-[90vh]">
      {posts.map((p: IPost) => <PostsItem key={p._id} post={p} />)}
    </div>
  )
}
