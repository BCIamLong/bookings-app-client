import { Outlet } from "react-router-dom";
import { motion } from 'framer-motion'

import Logo from "../Logo";
import Heading from "../../components/Heading";
import ButtonLink from "../../components/ButtonLink";
import { useTranslation } from "react-i18next";

export default function LoginLayout() {
  const { t } = useTranslation()
  return (
    <div className="grid grid-cols-[1fr_1.5fr] bg-stone-0 sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr] lg:md:grid-cols-[1fr_1.3fr] thin:grid-cols-1 thin:gap-12 tiny:grid-cols-[1fr_1fr] tiny:gap-8">
      <motion.div className="flex flex-col justify-center gap-16 p-6 bg-stone-0"
        initial={{ y: '-100vh' }} animate={{ y: 0 }} transition={{ duration: 0.3 }}>
        <Logo size="big" />
        <div className="flex flex-col gap-7">
          <Heading type="secondary">
            {t('login.heading')}
          </Heading>
          <p className="text-sm leading-6 text-stone-600">
            {t('login.description')}
          </p>
          <div className="w-[42%] lg:w-[48%] md:w-[50%] sm:w-[54%] tiny:w-[90%]">
            <ButtonLink type="primary" size="medium" href="/">
              {t('login.btn')}
            </ButtonLink>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ duration: 0.3 }}>
        <Outlet />
      </motion.div>
    </div>
  );
}
