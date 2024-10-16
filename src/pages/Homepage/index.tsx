import { useTranslation } from "react-i18next";
import Contact from "../../components/Contact";
import Discover from "../../components/Discover";
import Hero from "../../components/Hero";
import CabinsList from "../../features/cabins/CabinsList";
import LatestCabinsList from "../../features/cabins/LatestCabinsList";
import CategoriesList from "@/features/tours/CategoriesList";
import ToursList from "@/features/tours/ToursList";
import Services from "@/components/Services";
import Instructions from "@/components/Instructions";
import PostsHome from "@/features/Posts/PostsHome";

// const cabins = [
//   {
//     _id: "cabin1",
//     name: "Cozy Cabin",
//     maxCapacity: 4,
//     regularPrice: 100,
//     discount: 10,
//     description: "A cozy cabin for a small group or family getaway.",
//     image: "cozy_cabin.jpg",
//     createdAt: new Date("2024-02-20T12:00:00.000Z"),
//     updatedAt: new Date("2024-02-20T12:00:00.000Z"),
//   },
//   {
//     _id: "cabin2",
//     name: "Rustic Retreat",
//     maxCapacity: 6,
//     regularPrice: 150,
//     discount: 8,
//     description: "Escape to nature in this rustic retreat.",
//     image: "rustic_retreat.jpg",
//     createdAt: new Date("2024-02-20T12:00:00.000Z"),
//     updatedAt: new Date("2024-02-20T12:00:00.000Z"),
//   },
//   {
//     _id: "cabin3",
//     name: "Lakeside Lodge",
//     maxCapacity: 8,
//     regularPrice: 200,
//     discount: 15,
//     description: "Enjoy stunning views at this lakeside lodge.",
//     image: "lakeside_lodge.jpg",
//     createdAt: new Date("2024-02-20T12:00:00.000Z"),
//     updatedAt: new Date("2024-02-20T12:00:00.000Z"),
//   },
//   {
//     _id: "cabin4",
//     name: "Mountain Hideaway",
//     maxCapacity: 5,
//     regularPrice: 120,
//     discount: 5,
//     description: "Find tranquility in this mountain hideaway.",
//     image: "mountain_hideaway.jpg",
//     createdAt: new Date("2024-02-20T12:00:00.000Z"),
//     updatedAt: new Date("2024-02-20T12:00:00.000Z"),
//   },
//   {
//     _id: "cabin5",
//     name: "Secluded Cabin",
//     maxCapacity: 3,
//     regularPrice: 90,
//     discount: 8,
//     description: "Escape the hustle and bustle in this secluded cabin.",
//     image: "secluded_cabin.jpg",
//     createdAt: new Date("2024-02-20T12:00:00.000Z"),
//     updatedAt: new Date("2024-02-20T12:00:00.000Z"),
//   },
//   {
//     _id: "cabin6",
//     name: "Forest Cottage",
//     maxCapacity: 2,
//     regularPrice: 80,
//     discount: 8,
//     description: "A charming cottage nestled in the forest.",
//     image: "forest_cottage.jpg",
//     createdAt: new Date("2024-02-20T12:00:00.000Z"),
//     updatedAt: new Date("2024-02-20T12:00:00.000Z"),
//   },
// ];
export default function Homepage() {
  const { t } = useTranslation()
  return (
    <div>
      <Hero />
      <CategoriesList />
      <ToursList title="Our trending tours" />
      <Services />
      <Instructions />
      <ToursList title="Our best tours" />
      <PostsHome />
      {/* <LatestCabinsList />
      <div className="px-6 bg-stone-0">
        <h2 className="inline-block border-b-2 border-stone-700 pb-1 pt-2 text-xl font-bold text-stone-700">
          {t('cabins.homepage.default.heading')}
        </h2>
        <CabinsList isLink={true} />
      </div> */}
      <Discover />
      <Contact />
    </div>
  );
}
