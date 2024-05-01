import SearchForm from "../SearchForm";
import Button from "../../../components/Button";

export default function SearchBox() {
  return (
    <div className="flex justify-center">
      <div className="z-30 mx-auto md:w-[54rem] thin:w-[38rem] tiny:w-[45rem] sm:w-[48rem] -translate-y-60  text-stone-700 thin:max-tiny:-translate-y-44 absolute">
        <nav className="flex gap-6 px-6 py-3 text-stone-300">
          <h2 className="text-3xl font-bold uppercase">Find</h2>
          <ul className="flex gap-4 text-lg font-semibold">
            <li className="border-b-2">
              <Button type="nav-search">Cabins</Button>
            </li>
            <li>
              <Button type="nav-search">Flats</Button>
            </li>
            <li>
              <Button type="nav-search">Hotels</Button>
            </li>
            <li>
              <Button type="nav-search">Villas</Button>
            </li>
          </ul>
        </nav>
        <SearchForm />
      </div>
    </div>
  );
}
