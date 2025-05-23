// import { motion } from 'framer-motion'

import HeaderOptions from '../HeaderOptions'
import Logo from '../Logo'
import Navigation from '../Navigation'

// ! the issues with framer motion is still happened so for now let's just remove it and animation
export default function Header() {
  return (
    // <header className="h-24 bg-stone-50">
    <header className="relative ">
      <div className="bg-yellow-100 py-2 text-center font-semibold text-gray-600">
        <span>
          Please wait for a minute for server spinning up, if you want you can
          see the demo video{' '}
        </span>
        <a
          href="https://www.youtube.com/watch?v=mNfc_v4Mo3E"
          target="_blank"
          className="uppercase text-brand-600 transition-all duration-300 hover:underline"
        >
          here
        </a>
      </div>
      {/* transition={{ type: 'spring', duration: 0.7 }}> */}
      {/* <div className="flex items-center w-full z-40 fixed justify-between bg-stone-50 px-12 py-3 thin:max-tiny:px-3 tiny:max-sm:px-6"> */}
      <div className="absolute z-40 flex w-full items-center justify-between bg-transparent px-40 py-3 thin:max-tiny:px-3 tiny:max-sm:px-6">
        <Logo />
        {/* <div className="flex gap-3"> */}
        <Navigation />
        <HeaderOptions />
        {/* </div> */}
      </div>
    </header>
  )
}

{
  /* <motion.header className="h-24 bg-stone-50" initial={{ y: '-30rem', opacity: 1 }} animate={{ y: 0, opacity: 1 }}
transition={{ type: 'spring', duration: 0.7 }}>
<div className="flex items-center w-full z-40 fixed justify-between bg-stone-50 px-12 py-3 thin:max-tiny:px-3 tiny:max-sm:px-6">
  <Logo />
  <Navigation />
  <HeaderOptions />
</div>
</motion.header > */
}
