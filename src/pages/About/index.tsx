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
    <motion.div className="bg-stone-0 min-h-screen flex justify-center items-start p-12" variants={aboutVariants}
      initial='default' animate="light">
      <Heading type='secondary'>{t('about.heading')}</Heading>
      {/*   <motion.button variants={buttonVariants} initial='default' animate='light'>
        Hello
      </motion.button> 
      // ! propagate variants only works if the variants of the children are the same with the variants of the parent, otherwise it's not work
      */}
      <motion.button variants={buttonVariants}>
        Hello
      </motion.button>
    </motion.div>
  )
}
