import Spinner from "@/components/Spinner";
import PostsItem from "../PostsItem";
import { usePosts } from "../usePosts";
import { IPost } from "@/interfaces";
import Empty from "@/components/Empty";

export default function PostsList() {
  const { posts, isLoading } = usePosts({ sort: 'none' })
  posts?.forEach((_, ind: number) => {
    const j = Math.floor(Math.random() * (ind + 1)) //* j >= i && j <= i+1, if we have high rate it can be 1 swap to 2 then 3 swap to 2 then 4 swap to 3, and of course the rate can be different every time so it's not consistent
    const tmp = posts[j]
    posts[j] = posts[ind]
    posts[ind] = tmp
    // [array[i], array[j]] = [array[j], array[i]];
    // if (j === ind + 1) return
  })
  if (isLoading) return <Spinner size="normal" />
  if (!posts?.length) return <Empty>No posts at all</Empty>
  return (
    <div className="overflow-scroll no-scrollbar h-[90vh]">
      {posts?.map((p: IPost) => <PostsItem key={p._id} post={p} />)}
    </div>
  )
}
