// import { motion } from 'framer-motion'
import { useDarkModeContext } from "@/context/DarkModeContext";
import SearchBox from "@/features/tours/SearchBox";
// import SearchBox from "../../features/cabins/SearchBox";

export default function Hero() {
  const { isDarkMode } = useDarkModeContext()!
  return (
    // <section className="max-h-screen bg-stone-0" id="hero">
    <section className="relative max-h-screen bg-stone-0" id="hero">
      <img
        // className="outline-none thin:h-[50%] sm:h-[70%] md:max-lg:h-[80vh] lg:h-[90vh] xl:h-screen w-screen brightness-[60%] "
        className="outline-none thin:h-[50%] sm:h-[70%] md:max-lg:h-[80vh] lg:h-[90vh] xl:h-screen w-screen brightness-[100%] object-fill z-10"
        // src="/imgs/cabins/cabin-001.jpg"
        src={!isDarkMode ? '/banner-tour-5.jpg' : "https://img.freepik.com/free-vector/night-road-trip-by-car-travel-jeep-driving-highway-mountains-with-beautiful-seaview-landscape-full-moon-starry-sky_107791-5706.jpg?t=st=1734242959~exp=1734246559~hmac=856ab288755677f0d3d3b4f6121dd0bcdfb04db156db9fea4f584c05f59b3ab3&w=2000"}
        alt="Booking app banner"
      />
      {/* <div className="bg-hero h-lvh bg-cover bg-center bg-no-repeat"></div> */}
      {/* <SearchBox /> */}
      <SearchBox isDarkMode={isDarkMode} />
      {/* <motion.h1 className='absolute top-[30%] left-[30%] text-brand-600 font-bold' initial={{ display: 'none', fontSize: '1rem' }} animate={{
        display: 'block', fontSize: '3rem',
        borderRadius: '3px',
        paddingLeft: '0.6rem',
        paddingRight: '0.6rem',
        textShadow: '0px 0px 8px rgba(255,255,255, 1)',
        boxShadow: '0px 0px 8px 3px rgba(41, 37, 36,1)'
        // boxShadow: '0px 0px 8px 3px rgba(255,255,0, 1)'
      }} transition={{ duration: 0.3 }}
      >
        Welcome To Booking App
      </motion.h1> */}
    </section>
  );
}
