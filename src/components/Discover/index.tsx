import Button from "../Button";
import Heading from "../Heading";

export default function Discover() {
  return (
    <section className="flex items-center gap-24 px-28 py-28" id='discover'>
      <div className="flex w-[70%] flex-col gap-5">
        <div className="mb-2">
          <Heading type="secondary">
            Discover More About Property Rental
          </Heading>
          <div className="w-[30%] border-b-4 border-stone-500 p-2 py-3"></div>
        </div>
        <p className="text-sm text-stone-500">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
        <div className="mb-3 flex gap-4">
          <Button type="discover-light">Ask A Question</Button>
          <Button type="discover-light">Find A Property</Button>
        </div>
        <Button type="discover">Discover More</Button>
      </div>
      <div className="w-[40rem] overflow-hidden rounded-md">
        <img src="/imgs/cabins/cabin-001.jpg" alt="" />
      </div>
    </section>
  );
}
