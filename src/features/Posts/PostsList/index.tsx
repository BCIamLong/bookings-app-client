import Spinner from "@/components/Spinner";
import PostsItem from "../PostsItem";
import { usePosts } from "../usePosts";
import { IPost } from "@/interfaces";
import Empty from "@/components/Empty";

export default function PostsList() {
  const { posts, isLoading } = usePosts({ sort: 'none' })

  if (isLoading) return <Spinner size="normal" />
  if (!posts?.length) return <Empty>No posts at all</Empty>
  return (
    <div className="overflow-scroll no-scrollbar h-[90vh]">
      {posts.map((p: IPost) => <PostsItem key={p._id} post={p} />)}
    </div>
  )
}
