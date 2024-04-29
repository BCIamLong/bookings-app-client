import { NavLink } from "react-router-dom";
import Button from "../../components/Button";

export default function Navigation() {
  return (
    <nav className="flex items-center gap-12 text-xl font-medium text-stone-700">
      <ul className="flex items-center gap-4 [&>li>.active]:underline">
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/cabins">Cabins</NavLink>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
      </ul>
      <Button type="nav-header">Become a host</Button>
    </nav>
  );
}
