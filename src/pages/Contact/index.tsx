import Button from '@/components/Button'
import Form from '@/components/form/Form'
import FormItem from '@/components/form/FormItem'
import Input from '@/components/form/Input'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <motion.div style={{ backgroundImage: `url("/imgs/cabins/cabin-003.jpg")` }} className='bg-stone-0 p-12 min-h-screen text-stone-700' initial={{ opacity: 0, x: '100vw' }} animate={{ opacity: 1, x: 0 }}
      transition={{ type: 'spring', duration: 1, stiffness: 120, delay: 0.2 }}>
      <motion.h2 className='text-center mb-6 text-stone-200' initial={{ x: 0 }} animate={{ fontSize: '40px' }}>
        {t('contact.heading')}
      </motion.h2 >
      <div className='flex flex-col justify-center items-center gap-6'>
        <p className='text-stone-300'>
          {t('contact.description')}
        </p>


        <Form type="login" >
          <FormItem
            type="login"
            label={t('contact.form.fullName.label')}
            labelFor="fullName"
          >
            <Input
              type="text"
              variant="login"
              id="fullName"
              placeholder={t('contact.form.fullName.holder')}
            />
          </FormItem>

          <FormItem
            type="login"
            label={t('contact.form.email.label')}
            labelFor="email"
          >
            <Input
              type="email"
              variant="login"
              id="email"
              placeholder={t('contact.form.email.holder')}
            />
          </FormItem>

          <FormItem
            type="login"
            label={t('contact.form.phone.label')}
            labelFor="phone"
          >
            <Input
              type="text"
              variant="login"
              id="phone"
              placeholder={t('contact.form.phone.holder')}
            />
          </FormItem>

          <div className='mt-6 [&>button]:w-full'>
            <Button type="login">
              {t('contact.btn')}
            </Button>
          </div>
        </Form>

        {/* <motion.button className='bg-brand-500 text-stone-50 px-3 py-1 rounded-full' initial={{ x: '-100vw' }} animate={{ scale: 1.5, x: 0 }}
          whileHover={{
            scale: 1.6,
            textShadow: '0px 0px 8px rgba(255,255,255, 1)',
            boxShadow: '0px 0px 8px 3px rgba(255,255,0, 1)'
          }}
        >
          {t('contact.btn')}
        </motion.button> */}
      </div>
    </motion.div>
  )
}
