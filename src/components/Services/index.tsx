import { HiOutlineAcademicCap, HiOutlineChatBubbleLeftRight, HiOutlineCurrencyDollar, HiOutlineMap } from "react-icons/hi2";
import Heading from "../Heading";

export default function Services() {
  return (
    <div className="py-12 px-36 [&>h1]:justify-center flex flex-col gap-12 text-center bg-stone-0 tiny:max-md:px-24 thin:max-tiny:px-12 [&>h1]:text-brand-600">
      <Heading type="secondary">We Offer Best Services</Heading>
      <ul className="gap-6 thin:max-sm:grid thin:max-sm:grid-cols-2 grid grid-cols-2">
        <li className="bg-stone-50 flex flex-col gap-3 p-6 [&>h1]:justify-center shadow-sm rounded-lg">
          <div className="text-3xl mb-4 flex justify-center">
            <HiOutlineMap className="text-5xl text-brand-600" />
          </div>
          <Heading type="heading-4">Personalized Itineraries</Heading>
          <p className="text-sm text-stone-600">Discover the world your way with our customized travel plans. We tailor each itinerary to match your interests, ensuring a unique and unforgettable experience.</p>
        </li>
        <li className="bg-stone-50 flex flex-col gap-3 p-6 [&>h1]:justify-center shadow-sm rounded-lg">
          <div className="text-3xl mb-4 flex justify-center">
            <HiOutlineAcademicCap className="text-5xl text-brand-600" />
          </div>
          <Heading type="heading-4">Expert Guides</Heading>
          <p className="text-sm text-stone-600">Our knowledgeable and friendly guides are passionate about sharing their insights and stories. They ensure you get the most out of every destination, making your journey both educational and enjoyable.</p>
        </li>
        <li className="bg-stone-50 flex flex-col gap-3 p-6 [&>h1]:justify-center shadow-sm rounded-lg">
          <div className="text-3xl mb-4 flex justify-center">
            <HiOutlineCurrencyDollar className="text-5xl text-brand-600" />
          </div>
          <Heading type="heading-4">Seamless Booking</Heading>
          <p className="text-sm text-stone-600">Enjoy a hassle-free booking process with our user-friendly platform. From selecting your destination to finalizing your trip, we make it easy and convenient for you.</p>
        </li>
        <li className="bg-stone-50 flex flex-col gap-3 p-6 [&>h1]:justify-center shadow-sm rounded-lg">
          <div className="text-3xl mb-4 flex justify-center">
            <HiOutlineChatBubbleLeftRight className="text-5xl text-brand-600" />
          </div>
          <Heading type="heading-4">24/7 Customer Support</Heading>
          <p className="text-sm text-stone-600">Travel with peace of mind knowing that our dedicated support team is available around the clock. Whether you need assistance or have questions, we're here to help at any time.</p>
        </li>
      </ul>
    </div>
  )
}
