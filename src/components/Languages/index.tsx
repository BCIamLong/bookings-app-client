import { useTranslation } from "react-i18next";
import { HiLanguage } from "react-icons/hi2";

import Menu from "../Menu"
import Button from "../Button"

function Languages() {
  const { t, i18n } = useTranslation()
  const handleClickBtn = function (lan: string) {
    console.log(lan)
    i18n.changeLanguage(lan)
  }
  return <Menu>
    <Menu.Toggle id="nav-menu">
      <Button type="icon">
        <HiLanguage className="stroke-1 px-0.5 text-3xl text-stone-600" />
      </Button>
    </Menu.Toggle>
    <Menu.Box id="nav-menu">
      {/* <div className="hidden tiny:block"> */}
      <div className="">
        <ul className="flex py-2 flex-col gap-2 bg-stone-0 text-stone-700 rounded-md shadow-sm shadow-stone-100">
          <li><Button type="menu" size="medium" onClick={() => handleClickBtn('en-US')}>{t('header.options.languages.english')}</Button></li>
          <li><Button type="menu" size="medium" onClick={() => handleClickBtn('vi-VN')}>{t('header.options.languages.vietnamese')}</Button></li>
          {/* <li><ButtonLink type="menu" size="medium">Your bookmarks</ButtonLink></li> */}
        </ul>
      </div>
    </Menu.Box>
  </Menu>
}

export default Languages
