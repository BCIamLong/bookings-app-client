import { HiMoon, HiSun } from "react-icons/hi2";
import Button from "../Button";
import { useDarkModeContext } from "@/context/DarkModeContext";

export default function DarkMode() {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext()!

  return <>
    {
      isDarkMode ? <Button type="icon-1" onClick={toggleDarkMode}>< HiSun /></Button > :
        <Button type="icon-1" onClick={toggleDarkMode}><HiMoon /></Button>
    }
  </>
}
