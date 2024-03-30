export default function Navigation() {
  return (
    <nav className="flex text-gray-700 font-medium text-xl gap-12 items-center">
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
      <button className="bg-stone-700 text-stone-50 px-6  text-lg rounded-3xl py-2 flex items-center">
        Become a host
      </button>
    </nav>
  );
}
