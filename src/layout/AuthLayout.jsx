import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-gray-100 font-poppins">
      <nav className="w-11/12 mx-auto pt-5">
        <Navbar></Navbar>
      </nav>
      <section className="w-11/12 mx-auto pt-5">
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default AuthLayout;
