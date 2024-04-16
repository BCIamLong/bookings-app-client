import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "../../../components/Button";
import FormItem from "../../../components/form/FormItem";
import Input from "../../../components/form/Input";
import Form from "../../../components/form/Form";

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
      <Form type="search">
        <FormItem type="search" label="Location" labelFor="location">
          <Input
            variant="search"
            id="location"
            placeholder="Which city do you prefer?"
            type="text"
          />
        </FormItem>

        <FormItem type="search" label="Check in" labelFor="checked-in">
          <Input
            variant="search"
            id="checked-in"
            placeholder="Add dates"
            type="text"
          />
        </FormItem>

        <FormItem type="search" label="Check out" labelFor="checked-out">
          <Input
            variant="search"
            id="checked-out"
            placeholder="Add dates"
            type="text"
          />
        </FormItem>

        <FormItem type="search" label="Guests" labelFor="guests">
          <Input
            variant="search"
            id="guests"
            placeholder="Add guests"
            type="text"
          />
        </FormItem>

        <Button type="search">
          <HiMagnifyingGlass className="text-3xl text-stone-50" />
        </Button>
      </Form>
    </div>
  );
}
