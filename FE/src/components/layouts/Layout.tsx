
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50"> <Outlet/></main>
      <Footer />
    </div>
  );
}
