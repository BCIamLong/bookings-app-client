import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="w-24">
      <Link to="/">
        <img src="logo-light.png" />
      </Link>
    </div>
  );
}
