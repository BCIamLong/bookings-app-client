import UserOptionBox from "../../features/users/UserOptionBox";
import Logo from "../Logo";
import Navigation from "../Navigation";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-neutral-50 px-12 py-3">
      <Logo />
      <Navigation />
      <UserOptionBox />
    </header>
  );
}
