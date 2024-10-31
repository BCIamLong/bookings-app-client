import Spinner from "@/components/Spinner";
import PostsItem from "../PostsItem";
import { usePosts } from "../usePosts";
import { useUserSession } from "@/features/auth/useUserSession";
import { IPost } from "@/interfaces";
import Empty from "@/components/Empty";


export default function SavedPosts() {
  const { user, isLoading: isLoadingUser } = useUserSession()
  const { _id: userId } = user || {}
  const { posts, isLoading: isLoadingPosts } = usePosts({ sort: 'none', bookmarkFor: userId })

  if (isLoadingUser || isLoadingPosts) return <Spinner size="big" />

  if (!posts?.length) return <Empty>You don't bookmark any posts yet</Empty>

  return (
    <div className="overflow-scroll no-scrollbar h-[90vh]">
      {posts.map((p: IPost) => <PostsItem post={p} />)}
    </div>
  )
}
