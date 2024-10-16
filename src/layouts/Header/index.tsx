// import { motion } from 'framer-motion'

import HeaderOptions from "../HeaderOptions";
import Logo from "../Logo";
import Navigation from "../Navigation";

// ! the issues with framer motion is still happened so for now let's just remove it and animation
export default function Header() {
  return (
    // <header className="h-24 bg-stone-50">
    <header className="relative">
      {/* transition={{ type: 'spring', duration: 0.7 }}> */}
      {/* <div className="flex items-center w-full z-40 fixed justify-between bg-stone-50 px-12 py-3 thin:max-tiny:px-3 tiny:max-sm:px-6"> */}
      <div className="flex items-center w-full absolute z-40 justify-between bg-transparent px-40 py-3 thin:max-tiny:px-3 tiny:max-sm:px-6">
        <Logo />
        {/* <div className="flex gap-3"> */}
        <Navigation />
        <HeaderOptions />
        {/* </div> */}
      </div>
    </header >
  );
}



{/* <motion.header className="h-24 bg-stone-50" initial={{ y: '-30rem', opacity: 1 }} animate={{ y: 0, opacity: 1 }}
transition={{ type: 'spring', duration: 0.7 }}>
<div className="flex items-center w-full z-40 fixed justify-between bg-stone-50 px-12 py-3 thin:max-tiny:px-3 tiny:max-sm:px-6">
  <Logo />
  <Navigation />
  <HeaderOptions />
</div>
</motion.header > */}