import { ReactNode, cloneElement, createContext, useContext, useState } from "react"
import Button from "../Button"
import { useOutsideClick } from "@/hooks/useOutsideClick"


interface MenuContextProps {
  openId: string
  openMenu(openId: string): void
  closeMenu(): void
}

const MenuContext = createContext<MenuContextProps | null>(null)


const Toggle = function ({ id, children }: { id: string, children: JSX.Element }) {
  const { openId, closeMenu, openMenu } = useMenuContext()
  return cloneElement(children, {
    onClick: () => {
      if (openId === id) closeMenu()
      else openMenu(id)
    }
  }
  )

}

const MenuButton = function ({ children }: { children: ReactNode }) {
  return <Button type="">{children}</Button>
}

const Box = function ({ id, children }: { id: string, children: ReactNode }) {
  const { closeMenu, openId } = useMenuContext()

  const ref = useOutsideClick({ close: closeMenu })

  if (id !== openId) return null

  return <div className="fixed bottom-0 right-0 left-0 top-20 flex justify-end pr-28" ref={ref}>
    {children}
  </div>
}

export const useMenuContext = function () {
  const context = useContext(MenuContext)!

  if (context === undefined) throw new Error('The menu context is being used outside of the menu provider')

  return context
}

const Menu = function ({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState('false')

  const openMenu = function (id: string) {
    if (id === 'false') return

    setOpenId(id)
  }

  const closeMenu = function () {
    setOpenId('false')
  }

  return <MenuContext.Provider value={{ openId, openMenu, closeMenu }}>{children}</MenuContext.Provider>
}

Menu.Toggle = Toggle
Menu.MenuButton = MenuButton
Menu.Box = Box

export default Menu

