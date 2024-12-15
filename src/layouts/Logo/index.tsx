import { useDarkModeContext } from "@/context/DarkModeContext";
import { Link, useSearchParams } from "react-router-dom";

export default function Logo({ size }: { size?: "small" | "normal" | "big" }) {
  const [searchParams] = useSearchParams()
  const isTourDetailPage = searchParams.get('detail') || false
  let style = "w-24";
  if (size === "small") style = "w-12";
  if (size === "big") style = "w-36";
  const { isDarkMode } = useDarkModeContext()! || {}

  return (
    <div className={style}>
      <Link to="">
        {!isDarkMode && !isTourDetailPage ? <img src="/logo-light.png" /> : <img src="/logo-dark.png" />}
      </Link>
    </div>
  );
}
