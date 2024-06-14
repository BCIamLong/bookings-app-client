import Heading from '@/components/Heading'
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
    <motion.div className="bg-stone-0 min-h-screen flex flex-col  items-start p-12 leading-6" variants={aboutVariants}
      initial='default' animate="light">
      <div className='flex justify-center w-full'>
        <Heading type='secondary'>{t('about.heading')}</Heading>
      </div>
      {/*   <motion.button variants={buttonVariants} initial='default' animate='light'>
        Hello
      </motion.button> 
      // ! propagate variants only works if the variants of the children are the same with the variants of the parent, otherwise it's not work
      */}
      <div className='mt-12 text-stone-600 grid grid-cols-2 gap-6 gap-x-12'>
        <div className='col-span-2 flex flex-col gap-2'>
          <Heading type='tertiary'>{t('about.greet.heading')}</Heading>
          <p>{t('about.greet.content')}</p>
        </div>
        <div className='text-sm flex flex-col gap-3'>
          <Heading type='tertiary'>{t('about.story.heading')}</Heading>
          <p>{t('about.story.content1')}</p>
          <p>{t('about.story.content2')}</p>
        </div>
        <div className='text-sm'>
          <Heading type='tertiary'>{t('about.values.heading')}</Heading>
          <ul className='flex flex-col gap-3 mt-3'>
            <li>{t('about.values.content1')}</li>
            <li>{t('about.values.content2')}</li>
            <li>{t('about.values.content3')}</li>
          </ul>
        </div>
        <div className='col-span-2'>
          <Heading type='tertiary'>{t('about.community.heading')}</Heading>
          <div className='text-sm mt-3'>
            <p>{t('about.community.content1')}</p>
            <p>{t('about.community.content2')}</p>
          </div>
        </div>
      </div>
      <motion.button className='px-4 py-1 bg-brand-600 text-stone-100 rounded-full mt-12 mx-auto' variants={buttonVariants}>
        Explore more
      </motion.button>
    </motion.div>
  )
}
