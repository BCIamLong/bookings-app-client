import { useLocalStorageState } from "@/hooks/useLocalStorageState";
import { ReactNode, createContext, useContext, useEffect } from "react";

interface DarkModeContextProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const DarkModeContext = createContext<DarkModeContextProps | null>(null)


export const useDarkModeContext = function () {
  const context = useContext(DarkModeContext)

  if (context === undefined) throw new Error('The dark mode context is being used outside the dark mode provider')

  return context
}


export default function DarkModeProvider({ children }: { children: ReactNode }) {
  // const [isDarkMode, setIsDarkMode] = useState(() => {
  //   const rawVal = localStorage.getItem('darkMode');
  //   return JSON.parse(rawVal!) || false
  // })
  // const [isDarkMode, setIsDarkMode] = useLocalStorageState({ key: 'darkMode', initialState: false })
  // * get the dark mode based on our system (browser)
  const [isDarkMode, setIsDarkMode] = useLocalStorageState({ key: 'darkMode', initialState: window.matchMedia("(prefers-color-scheme: dark)").matches })

  useEffect(function () {
    if (!isDarkMode) {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      return
    }

    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')

  }, [isDarkMode]);

  const toggleDarkMode = function () {
    setIsDarkMode((isDarkMode: boolean) => !isDarkMode)
    // localStorage.setItem('darkMode', JSON.stringify(!isDarkMode))
  }
  return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>
}

