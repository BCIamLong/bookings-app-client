import SearchBox from "../../features/cabins/SearchBox";

export default function Hero() {
  return (
    <section className="max-h-screen " id="hero">
      <img
        className="outline- h-screen w-screen brightness-[60%] "
        src="/imgs/cabins/cabin-001.jpg"
        alt=""
      />
      {/* <div className="bg-hero h-lvh bg-cover bg-center bg-no-repeat"></div> */}
      <SearchBox />
    </section>
  );
}
