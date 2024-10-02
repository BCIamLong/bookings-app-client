import Heading from "@/components/Heading"

export default function PostsHome() {
  return (
    <div className="p-12 flex flex-col gap-6 bg-stone-0">
      <Heading type="secondary">Get inspiration for your next trip</Heading>
      <div className="grid grid-cols-[1.65fr_1fr] gap-x-12 thin:max-sm:grid-cols-2 thin:max-sm:gap-y-12">
        <div className="row-span-2 relative thin:max-sm:col-span-2">
          <div className="[&>div>img]:hover:scale-125 cursor-pointer">
            <div className="absolute bottom-20 thin:max-tiny:bottom-16 left-0 p-3 z-20 flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <img className="rounded-full w-16" src="imgs/users/user-6.jpg" alt="" />
                <p className="text-white font-semibold">Alex Anser</p>
              </div>
              <p className="text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus molestias sunt saepe quibusdam iste doloremque, est tempore, corrupti beatae tempora dolor ducimus ut fugit voluptates officiis amet sequi accusantium laborum.</p>
            </div>
            <div className="overflow-hidden rounded-lg">
              <img className="transition-all duration-300 z-10 brightness-50 w-[100%] rounded-lg" src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
          </div>
        </div>
        <div className="relative cursor-pointer hover:-translate-y-1 transition-all duration-300">
          <div className="absolute bottom-8 left-0 p-3 z-20 flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <img className="rounded-full w-12" src="imgs/users/user-6.jpg" alt="" />
              <p className="text-white font-semibold">Alex Anser</p>
            </div>
            <p className="text-white">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <img className="w-[93%] h-[90%] rounded-lg z-10 brightness-50" src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className="relative">
          <div className="w-[100%] h-[78%] thin:max-sm:h-[90%] [&>img]:hover:brightness-75 cursor-pointer">
            <div className="absolute bottom-14 thin:max-sm:bottom-8 left-0 p-3 z-20 flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <img className="rounded-full w-12" src="imgs/users/user-6.jpg" alt="" />
                <p className="text-white font-semibold">Alex Anser</p>
              </div>
              <p className="text-white ">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <img className="w-[93%] h-full transition-all duration-500  thin:max-sm:w-[100%] rounded-lg z-10 brightness-50" src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
