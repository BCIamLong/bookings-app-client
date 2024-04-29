import HeaderOptions from "../HeaderOptions";
import Logo from "../Logo";
import Navigation from "../Navigation";

export default function Header() {
  return (
    <header className="h-24 bg-stone-50">
      <div className="flex items-center w-full z-40 fixed justify-between bg-stone-50 px-12 py-3">
        <Logo />
        <Navigation />
        <HeaderOptions />
      </div>
    </header>
  );
}
