import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function AppLayout({ key }: { key?: string }) {
  return (
    <div className="">
      <Header key={key} />
      <Outlet />
      <Footer />
    </div>
  );
}
