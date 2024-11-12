import Heading from "@/components/Heading"
import { usePosts } from "../usePosts"
import Spinner from "@/components/Spinner"
import { IPost, IUser } from "@/interfaces"
import { Link } from "react-router-dom"

export default function PostsHome() {
  const { posts, isLoading } = usePosts({ sort: 'none' })
  // console.log('-------------------------', posts)
  const { _id: post1Id, images: images1, title: title1, userId: user1, description: description1 } = posts?.[0] as IPost || {}
  const { images: images2, title: title2, userId: user2, description: description2 } = posts?.[1] as IPost || {}
  const { images: images3, userId: user3, description: description3 } = posts?.[2] as IPost || {}
  const { avatar: avatar1, fullName: fullName1 } = user1 as IUser || {}
  const { avatar: avatar2, fullName: fullName2 } = user2 as IUser || {}
  const { avatar: avatar3, fullName: fullName3 } = user3 as IUser || {}

  if (isLoading) <Spinner size="normal" />

  return (
    <div className="p-12 flex flex-col gap-6 bg-stone-0">
      <Heading type="secondary">Get inspiration for your next trip</Heading>
      <div className="grid grid-cols-[1.65fr_1fr] gap-x-12 items-center thin:max-sm:grid-cols-2 thin:max-sm:gap-y-12">
        <div className="row-span-2 relative thin:max-sm:col-span-2">
          <Link to={`/posts/${post1Id}`}>
            <div className="[&>div>img]:hover:scale-125 cursor-pointer">
              <div className="absolute bottom-20 thin:max-tiny:bottom-16 left-0 p-3 z-20 flex flex-col gap-3">
                <div className="flex gap-3 items-center">
                  <img className="rounded-full w-16" src={avatar1} alt="" />
                  <p className="text-white font-semibold">{fullName1}</p>
                </div>
                <p className="text-white font-semibold italic">{title1}</p>
                <p className="text-white ">{description1}</p>
              </div>
              <div className="overflow-hidden rounded-lg">
                <img className="transition-all duration-300 z-10 brightness-50 w-[50rem] h-[33rem] object-center rounded-lg thin:max-sm:w-full thin:max-sm:object-cover thin:max-sm:h-[40rem]" src={images1?.[0]} alt="" />
              </div>
            </div>
          </Link>
        </div>
        <div className="relative cursor-pointer hover:-translate-y-1 transition-all duration-300">
          <div className="absolute bottom-8 left-0 p-3 z-20 flex flex-col gap-2 thin:max-sm:bottom-4">
            <div className="flex gap-2 items-center">
              <img className="rounded-full w-12" src="imgs/users/user-6.jpg" alt="" />
              <p className="text-white font-semibold">Alex Anser</p>
            </div>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <img className="w-[27rem] h-[14rem] rounded-lg z-10 brightness-50 thin:max-sm:w-full thin:max-sm:object-cover thin:max-sm:h-auto" src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className="relative">
          <div className="w-[100%] h-[78%] thin:max-sm:h-[90%] [&>img]:hover:brightness-75 cursor-pointer">
            <div className="absolute bottom-10 thin:max-sm:bottom-4 left-0 p-3 z-20 flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <img className="rounded-full w-12" src="imgs/users/user-6.jpg" alt="" />
                <p className="text-white font-semibold">Alex Anser</p>
              </div>
              <p className="text-white ">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <img className="w-[27rem] h-[16rem] transition-all duration-500 thin:max-sm:w-full thin:max-sm:object-cover thin:max-sm:h-auto rounded-lg z-10 brightness-50" src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
