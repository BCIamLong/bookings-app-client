import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function HomeLayout() {
  return (
    <div className="" >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
