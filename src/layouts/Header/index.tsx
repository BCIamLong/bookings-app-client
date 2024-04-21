import HeaderOptions from "../HeaderOptions";
import Logo from "../Logo";
import Navigation from "../Navigation";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-stone-50 px-12 py-3 dark:bg-stone-800">
      <Logo />
      <Navigation />
      <HeaderOptions />
    </header>
  );
}
