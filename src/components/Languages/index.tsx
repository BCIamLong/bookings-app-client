import { useTranslation } from "react-i18next";
import { HiLanguage } from "react-icons/hi2";

import Menu from "../Menu"
import Button from "../Button"
import Box from "../Box";
import BoxItem from "../BoxItem";

function Languages() {
  const { t, i18n } = useTranslation()
  const handleClickBtn = function (lan: string) {
    // console.log(lan)
    i18n.changeLanguage(lan)

  }
  return <div className="[&>div]:hover:visible  [&>div]:hover:opacity-100 relative transition-all duration-400 ">
    <Button type="icon-1">
      <HiLanguage className="stroke-1 px-0.5 text-stone-600" />
    </Button>
    <Box width="64" title="Languages">
      <li className={`${(i18n.language === 'en-US' || i18n.language === 'en') && 'bg-stone-300 rounded-md'}` + ' text-stone-600'}><Button type="menu-1" size="medium" onClick={() => handleClickBtn('en-US')}>{t('header.options.languages.english')}</Button></li>
      <li className={`${i18n.language === 'vi-VN' && 'bg-stone-300 rounded-md'}` + ' text-stone-600'}><Button type="menu-1" size="medium" onClick={() => handleClickBtn('vi-VN')}>{t('header.options.languages.vietnamese')}</Button></li>
    </Box>
  </div>


}
// return <Menu>
//   <Menu.Toggle id="nav-menu">
//     <Button type="icon-1">
//       <HiLanguage className="stroke-1 px-0.5 text-stone-600" />
//     </Button>
//   </Menu.Toggle>
//   <Menu.Box id="nav-menu">
//     {/* <div className="hidden tiny:block"> */}
//     <div className="">
//       <ul className="flex py-2 flex-col gap-2 bg-stone-0 text-stone-700 rounded-md shadow-sm shadow-stone-100">
//         <li><Button type="menu" size="medium" onClick={() => handleClickBtn('en-US')}>{t('header.options.languages.english')}</Button></li>
//         <li><Button type="menu" size="medium" onClick={() => handleClickBtn('vi-VN')}>{t('header.options.languages.vietnamese')}</Button></li>
//         {/* <li><ButtonLink type="menu" size="medium">Your bookmarks</ButtonLink></li> */}
//       </ul>
//     </div>
//   </Menu.Box>
// </Menu>
// }

export default Languages
