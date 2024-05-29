import { useDarkModeContext } from "@/context/DarkModeContext";
import { Link } from "react-router-dom";

export default function Logo({ size }: { size?: "small" | "normal" | "big" }) {
  let style = "w-24";
  if (size === "small") style = "w-12";
  if (size === "big") style = "w-36";
  const { isDarkMode } = useDarkModeContext()! || {}

  return (
    <div className={style}>
      <Link to="/">
        {!isDarkMode ? <img src="/logo-light.png" /> : <img src="/logo-dark.png" />}
      </Link>
    </div>
  );
}
