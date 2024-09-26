import { HiBars3 } from "react-icons/hi2";

import Menu from "@/components/Menu";
import ButtonLink from "@/components/ButtonLink";
import Button from "@/components/Button";
import { useTranslation } from "react-i18next";
import { useUserSession } from "@/features/auth/useUserSession";
import Spinner from "@/components/Spinner";
import Box from "@/components/Box";

export default function MenuOptions() {
  const { isLoading, user } = useUserSession();
  const { t } = useTranslation()

  if (isLoading) return <Spinner size="small" />;

  return <>
    {user &&
      <div className="[&>.div2]:tiny:hover:flex [&>.div1]:thin:max-tiny:hover:flex relative">
        <Button type="icon">
          <HiBars3 className="stroke-1 px-0.5 text-3xl text-stone-600" />
        </Button>
        <div className="div1 absolute p-3 top-12 right-0 w-64 bg-stone-50 rounded-md hidden flex-col gap-3 ">
          <ul className="p-3 flex gap-3 flex-col">
            <li><ButtonLink href="/" type="menu" size="medium" isNavLink={true}>{t('header.nav.homepage')}</ButtonLink></li>
            <li><ButtonLink href="/cabins" type="menu" size="medium" isNavLink={true}>{t('header.nav.cabins')}</ButtonLink></li>
            <li><ButtonLink href="/contact" type="menu" size="medium" isNavLink={true}>{t('header.nav.contact')}</ButtonLink></li>
            <li><ButtonLink href="about" type="menu" size="medium" isNavLink={true}>{t('header.nav.about')}</ButtonLink></li>
            <li><ButtonLink href="/bookmarks" type="menu" size="medium" isNavLink={true}>{t('header.options.menu.bookmarks')}</ButtonLink></li>
          </ul>
        </div>
        <div className="div2 absolute p-3 top-12 right-0 w-64 bg-stone-50 rounded-md hidden flex-col gap-3 ">
          <ul className="p-3 flex gap-3 flex-col">
            <li><ButtonLink href="/bookmarks" type="menu" size="medium" isNavLink={true}>{t('header.options.menu.bookmarks')}</ButtonLink></li>
            <li><ButtonLink href="/bookmarks" type="menu" size="medium" isNavLink={true}>{t('header.options.menu.bookmarks')}</ButtonLink></li>
            <li><ButtonLink href="/bookmarks" type="menu" size="medium" isNavLink={true}>{t('header.options.menu.bookmarks')}</ButtonLink></li>
          </ul>
        </div>
      </div>


    }
  </>
}
//       <Menu>
//         <Menu.Toggle id="nav-menu">
//           <Button type="icon">
//             <HiBars3 className="stroke-1 px-0.5 text-3xl text-stone-600" />
//           </Button>
//         </Menu.Toggle>
//         <Menu.Box id="nav-menu">
//           <div className="hidden tiny:block">
//             <ul className="flex py-2 flex-col gap-2 bg-stone-0 text-stone-700 rounded-md shadow-sm shadow-stone-100">
//               <li><ButtonLink href="/bookmarks" type="menu" size="medium">{t('header.options.menu.bookmarks')}</ButtonLink></li>
//               <li><ButtonLink type="menu" size="medium">{t('header.options.menu.bookmarks')}</ButtonLink></li>
//               <li><ButtonLink type="menu" size="medium">{t('header.options.menu.bookmarks')}</ButtonLink></li>
//             </ul>
//           </div>
//           <div className="hidden thin:max-tiny:block">
//             <ul className="flex py-2 flex-col items-start gap-2 bg-stone-0 text-stone-700 rounded-md shadow-sm shadow-stone-100 [&>li>.active]:underline">
//               <li><ButtonLink href="/" type="menu" size="medium" isNavLink={true}>{t('header.nav.homepage')}</ButtonLink></li>
//               <li><ButtonLink href="/cabins" type="menu" size="medium" isNavLink={true}>{t('header.nav.cabins')}</ButtonLink></li>
//               <li><ButtonLink href="/contact" type="menu" size="medium" isNavLink={true}>{t('header.nav.contact')}</ButtonLink></li>
//               <li><ButtonLink href="about" type="menu" size="medium" isNavLink={true}>{t('header.nav.about')}</ButtonLink></li>
//               <li><ButtonLink href="/bookmarks" type="menu" size="medium" isNavLink={true}>{t('header.options.menu.bookmarks')}</ButtonLink></li>
//             </ul>
//           </div>
//         </Menu.Box>
//       </Menu>
//     }
//   </>
// }
