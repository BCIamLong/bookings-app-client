import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.div className='bg-stone-0 p-12 min-h-screen text-stone-700' initial={{ opacity: 0, x: '100vw' }} animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', duration: 1, stiffness: 120, delay: 0.2 }}>
      <motion.h2 className='text-center mb-6' initial={{ x: 0 }} animate={{ fontSize: '40px' }}>
        Contact us
      </motion.h2 >
      <div className='flex flex-col justify-center items-center gap-6'>
        <p>
          <span>Contact us at </span>
          <span>
            bookingapp@gmail.com
          </span>
        </p>
        <motion.button className='bg-brand-500 text-stone-50 px-3 py-1 rounded-full' initial={{ x: '-100vw' }} animate={{ scale: 1.5, x: 0 }}
          whileHover={{
            scale: 1.6,
            textShadow: '0px 0px 8px rgba(255,255,255, 1)',
            boxShadow: '0px 0px 8px 3px rgba(255,255,0, 1)'
          }}
        >
          Contact
        </motion.button>
      </div>
    </motion.div>
  )
}
