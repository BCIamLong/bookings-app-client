import SearchBox from "../../features/cabins/SearchBox";

export default function Hero() {
  return (
    <section className="max-h-screen ">
      <img
        className="h-screen w-screen brightness-[60%]"
        src="public/imgs/cabins/cabin-001.jpg"
        alt=""
      />
      {/* <div className="bg-hero h-lvh bg-cover bg-center bg-no-repeat"></div> */}
      <SearchBox />
    </section>
  );
}
