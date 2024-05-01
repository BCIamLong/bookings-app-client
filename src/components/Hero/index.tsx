import SearchBox from "../../features/cabins/SearchBox";

export default function Hero() {
  return (
    // <section className="max-h-screen bg-stone-0" id="hero">
    <section className="relative max-h-screen bg-stone-0" id="hero">
      <img
        className="outline-none thin:h-[50%] sm:h-[70%] md:max-lg:h-[80vh] lg:h-[90vh] xl:h-screen w-screen brightness-[60%] "
        src="/imgs/cabins/cabin-001.jpg"
        alt="Booking app banner"
      />
      {/* <div className="bg-hero h-lvh bg-cover bg-center bg-no-repeat"></div> */}
      <SearchBox />
    </section>
  );
}
