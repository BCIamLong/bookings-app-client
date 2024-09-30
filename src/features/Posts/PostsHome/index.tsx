import Heading from "@/components/Heading"

export default function PostsHome() {
  return (
    <div className="p-12 flex flex-col gap-6 bg-stone-0">
      <Heading type="secondary">Get inspiration for your next trip</Heading>
      <div className="grid grid-cols-[1.65fr_1fr] gap-12">
        <div className="row-span-2 relative cursor-pointer">
          <div className="absolute bottom-16 left-0 p-3 z-20 flex flex-col gap-3">
            <div className="flex gap-3 items-center">
              <img className="rounded-full w-16" src="imgs/users/user-6.jpg" alt="" />
              <p className="text-white font-semibold">Alex Anser</p>
            </div>
            <p className="text-white ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus molestias sunt saepe quibusdam iste doloremque, est tempore, corrupti beatae tempora dolor ducimus ut fugit voluptates officiis amet sequi accusantium laborum.</p>
          </div>
          <img className="z-10 brightness-50 w-[100%] rounded-lg" src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="relative cursor-pointer">
            <div className="absolute bottom-0 left-0 p-3 z-20 flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <img className="rounded-full w-12" src="imgs/users/user-6.jpg" alt="" />
                <p className="text-white font-semibold">Alex Anser</p>
              </div>
              <p className="text-white ">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <img className="w-[78%] rounded-lg z-10 brightness-50" src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div className="relative cursor-pointer">
            <div className="absolute bottom-0 left-0 p-3 z-20 flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <img className="rounded-full w-12" src="imgs/users/user-6.jpg" alt="" />
                <p className="text-white font-semibold">Alex Anser</p>
              </div>
              <p className="text-white ">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <img className="w-[78%] rounded-lg z-10 brightness-50" src="https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
