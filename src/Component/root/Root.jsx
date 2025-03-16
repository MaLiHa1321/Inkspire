import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";


const Root = () => {
    return (
        <div className=" max-w-6xl mx-auto m-2 mt-0 p-2">
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Root;