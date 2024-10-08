import Button from '@/components/Button'
import Contact from '@/components/Contact'
import Heading from '@/components/Heading'
import CategoriesList from '@/features/tours/CategoriesList'
import { Variants, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const aboutVariants: Variants = {
  default: {
    opacity: 0
  },
  light: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

const buttonVariants: Variants = {
  default: {
    scale: 1
  },
  light: {
    scale: 1.5,
    transition: {
      duration: 1
    }
  }
}

export default function About() {
  const { t } = useTranslation()
  return (
    <div className='bg-stone-0'>
      <div className="relative">
        <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="uppercase text-stone-50 font-bold text-sm leading-8">Read</h2>
          <p className="text-8xl text-stone-50 font-semibold font-title">About Us</p>
        </div>
        <img className="brightness-[90%] z-10 h-[33rem] w-full" src="https://images.pexels.com/photos/1450340/pexels-photo-1450340.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
      </div>
      <div className='flex gap-16 px-36 py-24 w-[100%] items-center thin:max-sm:grid thin:max-sm:grid-cols-1 sm:max-md:gap-0 sm:max-md:px-28 md:max-xl:px-28'>
        <div className='flex flex-col gap-3 w-[60%] [&>h1]:leading-10 tiny:max-sm:w-[90%] sm:max-md:w-[90%] md:max-lg:w-[80%] thin:max-sm:w-[100%]'>
          <p className='text-brand-700 uppercase text-xs font-bold'>Promotion</p>
          <Heading type='secondary'>We Provide You Best Europe Sightseeing Tours</Heading>
          <p className='text-stone-500 text-sm mt-4'>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
          <div className='mt-3'>
            <Button type='brand'>View tours</Button>
          </div>
        </div>
        <div className='flex justify-end tiny:max-sm:justify-start'>
          <img className='rounded-full border-stone-300 outline-offset-4  outline-4 outline-double outline-brand-300  tiny:max-sm:w-[100%] sm:max-md:w-[80%] md:max-lg:w-[90%]' src="https://images.pexels.com/photos/1450340/pexels-photo-1450340.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
        </div>
      </div>
      <div className='grid grid-cols-3 thin:max-sm:grid-cols-2 shadow-md border-1 border border-stone-100 mt-12'>
        <img src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className='px-6 text-center thin:max-tiny:gap-4 [&>h1]:justify-center flex flex-col gap-6 items-center justify-center'>
          <Heading type='secondary'>Our story</Heading>
          <p className='text-sm text-stone-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aspernatur! Officia blanditiis ipsam laborum impedit excepturi iste tenetur? Suscipit ipsum nisi accusantium eligendi error officiis consequuntur provident odit fugit dignissimos.</p>
        </div>
        <img className='thin:max-sm:col-start-2' src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className='thin:max-tiny:gap-4 thin:max-sm:row-start-2 thin:max-sm:row-end-3  px-6 text-center [&>h1]:justify-center flex flex-col gap-6 items-center justify-center'>
          <Heading type='secondary'>Our story</Heading>
          <p className='text-sm text-stone-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aspernatur! Officia blanditiis ipsam laborum impedit excepturi iste tenetur? Suscipit ipsum nisi accusantium eligendi error officiis consequuntur provident odit fugit dignissimos.</p>
        </div>
        <img className='' src="https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <div className='thin:max-tiny:gap-4 px-6 text-center [&>h1]:justify-center flex flex-col gap-6 items-center justify-center'>
          <Heading type='secondary'>Our story</Heading>
          <p className='text-sm text-stone-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aspernatur! Officia blanditiis ipsam laborum impedit excepturi iste tenetur? Suscipit ipsum nisi accusantium eligendi error officiis consequuntur provident odit fugit dignissimos.</p>
        </div>

      </div>
      <div className='flex flex-col gap-6 py-24'>
        <div className='flex flex-col gap-3 items-center'>
          <p className='text-brand-700 uppercase text-xs font-bold'>Explore more</p>
          <Heading type='secondary'>Our tours categories</Heading>
        </div>
        <div className=''>
          <CategoriesList type='normal' />
        </div>
      </div>
      <div>
        <Contact />
      </div>
    </div>
    // <motion.div className="bg-stone-0 min-h-screen flex flex-col  items-start p-12 leading-6" variants={aboutVariants}
    //   initial='default' animate="light">
    //   <div className='flex justify-center w-full'>
    //     <Heading type='secondary'>{t('about.heading')}</Heading>
    //   </div>
    //   {/*   <motion.button variants={buttonVariants} initial='default' animate='light'>
    //     Hello
    //   </motion.button> 
    //   // ! propagate variants only works if the variants of the children are the same with the variants of the parent, otherwise it's not work
    //   */}
    //   <div className='mt-12 text-stone-600 grid grid-cols-2 gap-6 gap-x-12'>
    //     <div className='col-span-2 flex flex-col gap-2'>
    //       <Heading type='tertiary'>{t('about.greet.heading')}</Heading>
    //       <p>{t('about.greet.content')}</p>
    //     </div>
    //     <div className='text-sm flex flex-col gap-3'>
    //       <Heading type='tertiary'>{t('about.story.heading')}</Heading>
    //       <p>{t('about.story.content1')}</p>
    //       <p>{t('about.story.content2')}</p>
    //     </div>
    //     <div className='text-sm'>
    //       <Heading type='tertiary'>{t('about.values.heading')}</Heading>
    //       <ul className='flex flex-col gap-3 mt-3'>
    //         <li>{t('about.values.content1')}</li>
    //         <li>{t('about.values.content2')}</li>
    //         <li>{t('about.values.content3')}</li>
    //       </ul>
    //     </div>
    //     <div className='col-span-2'>
    //       <Heading type='tertiary'>{t('about.community.heading')}</Heading>
    //       <div className='text-sm mt-3'>
    //         <p>{t('about.community.content1')}</p>
    //         <p>{t('about.community.content2')}</p>
    //       </div>
    //     </div>
    //   </div>
    //   <motion.button className='px-4 py-1 bg-brand-600 text-stone-100 rounded-full mt-12 mx-auto' variants={buttonVariants}>
    //     Explore more
    //   </motion.button>
    // </motion.div>
  )
}
