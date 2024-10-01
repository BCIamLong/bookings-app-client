import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function AppLayout() {
  return (
    <div className="" >
      <div className="relative ">
        <Header />
        <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="uppercase text-stone-50 font-bold text-sm leading-8">Search Tour</h2>
          <p className="text-8xl text-stone-50 font-semibold font-title">Travel with us</p>
        </div>
        <img className="brightness-[90%] z-10 h-[33rem] w-full" src="https://images.pexels.com/photos/238622/pexels-photo-238622.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
