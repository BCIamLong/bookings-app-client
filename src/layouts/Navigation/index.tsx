import Button from "../../components/Button";

export default function Navigation() {
  return (
    <nav className="flex items-center gap-12 text-xl font-medium text-gray-700">
      <ul className="flex items-center gap-4">
        <li>
          <a href="#">Homepage</a>
        </li>
        <li>
          <a href="#">Cabins</a>
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
