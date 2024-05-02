import { HiBars3 } from "react-icons/hi2";

import Menu from "@/components/Menu";
import ButtonLink from "@/components/ButtonLink";
import Button from "@/components/Button";

export default function MenuOptions() {
  return <>
    <Menu>
      <Menu.Toggle id="nav-menu">
        <Button type="icon">
          <HiBars3 className="stroke-1 px-0.5 text-3xl text-stone-600" />
        </Button>
      </Menu.Toggle>
      <Menu.Box id="nav-menu">
        <div className="hidden tiny:block">
          <ul className="flex py-2 flex-col gap-2 bg-stone-0 text-stone-700 rounded-md shadow-sm shadow-stone-100">
            <li><ButtonLink href="/bookmarks" type="menu" size="medium">Your bookmarks</ButtonLink></li>
            <li><ButtonLink type="menu" size="medium">Your bookmarks</ButtonLink></li>
            <li><ButtonLink type="menu" size="medium">Your bookmarks</ButtonLink></li>
          </ul>
        </div>
        <div className="hidden thin:max-tiny:block">
          <ul className="flex py-2 flex-col items-start gap-2 bg-stone-0 text-stone-700 rounded-md shadow-sm shadow-stone-100 [&>li>.active]:underline">
            <li><ButtonLink href="/" type="menu" size="medium" isNavLink={true}>Homepage</ButtonLink></li>
            <li><ButtonLink href="/cabins" type="menu" size="medium" isNavLink={true}>Cabins</ButtonLink></li>
            <li><ButtonLink href="/contact" type="menu" size="medium" isNavLink={true}>Contact</ButtonLink></li>
            <li><ButtonLink href="about" type="menu" size="medium" isNavLink={true}>About us</ButtonLink></li>
            <li><ButtonLink href="/bookmarks" type="menu" size="medium" isNavLink={true}>Your bookmarks</ButtonLink></li>
          </ul>
        </div>
      </Menu.Box>
    </Menu>
  </>
}
