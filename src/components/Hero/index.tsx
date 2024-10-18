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
        className="outline-none thin:h-[50%] sm:h-[70%] md:max-lg:h-[80vh] lg:h-[90vh] xl:h-screen w-screen brightness-[90%] "
        // src="/imgs/cabins/cabin-001.jpg"
        src={!isDarkMode ? 'https://images.pexels.com/photos/7276577/pexels-photo-7276577.jpeg?auto=compress&cs=tinysrgb&w=600' : "https://images.pexels.com/photos/450062/pexels-photo-450062.jpeg?auto=compress&cs=tinysrgb&w=600"}
        alt="Booking app banner"
      />
      {/* <div className="bg-hero h-lvh bg-cover bg-center bg-no-repeat"></div> */}
      {/* <SearchBox /> */}
      <SearchBox />
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
