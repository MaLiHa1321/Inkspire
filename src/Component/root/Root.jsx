import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";


const Root = () => {
    return (
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default Root;