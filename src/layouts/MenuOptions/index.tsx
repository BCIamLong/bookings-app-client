import { HiBars3 } from "react-icons/hi2";

import Menu from "@/components/Menu";
import ButtonLink from "@/components/ButtonLink";
import Button from "@/components/Button";

export default function MenuOptions() {
  return <Menu>
    <Menu.Toggle id="nav-menu">
      <Button type="icon">
        <HiBars3 className="stroke-1 px-0.5 text-3xl text-stone-600" />
      </Button>
    </Menu.Toggle>
    <Menu.Box id="nav-menu">
      <div className="">
        <ul className="flex py-2 flex-col gap-2 bg-stone-0 text-stone-700 rounded-md shadow-sm shadow-stone-100">
          <li><ButtonLink href="/bookmarks" type="menu" size="medium">Your bookmarks</ButtonLink></li>
          <li><ButtonLink type="menu" size="medium">Your bookmarks</ButtonLink></li>
          <li><ButtonLink type="menu" size="medium">Your bookmarks</ButtonLink></li>
        </ul>
      </div>
    </Menu.Box>
  </Menu>
}
