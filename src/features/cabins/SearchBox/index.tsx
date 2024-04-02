import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "../../../components/Button";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";

export default function SearchBox() {
  return (
    <div className="z-30 mx-auto w-[750px] -translate-y-60  text-stone-700">
      <nav className="flex gap-6 px-6 py-3 text-stone-300">
        <h2 className="text-3xl font-bold uppercase">Find</h2>
        <ul className="flex gap-4 text-lg font-semibold">
          <li className="border-b-2">
            <Button type="nav-search">Rooms</Button>
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
      <div className="grid grid-cols-[12rem,9rem,9rem,9rem,3rem] gap-3 divide-x-2 rounded-full bg-white px-6 py-3 ">
        <FormItem type="search" label="Location" labelFor="location">
          <Input
            id="location"
            placeholder="Which city do you prefer?"
            type="search"
          />
        </FormItem>

        <FormItem type="search" label="Check in" labelFor="checked-in">
          <Input id="checked-in" placeholder="Add dates" type="search" />
        </FormItem>

        <FormItem type="search" label="Check out" labelFor="checked-out">
          <Input id="checked-out" placeholder="Add dates" type="search" />
        </FormItem>

        <FormItem type="search" label="Guests" labelFor="guests">
          <Input id="guests" placeholder="Add guests" type="search" />
        </FormItem>

        <Button type="search">
          <HiMagnifyingGlass className="text-3xl text-stone-50" />
        </Button>
      </div>
    </div>
  );
}
