import { Link } from "react-router-dom";

export default function Logo({ size }: { size?: "small" | "normal" | "big" }) {
  let style = "w-24";
  if (size === "small") style = "w-12";
  if (size === "big") style = "w-36";
  return (
    <div className={style}>
      <Link to="/">
        <img src="/logo-light.png" />
      </Link>
    </div>
  );
}
