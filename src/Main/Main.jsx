import { Outlet } from "react-router-dom";
import Footer from "../Share/Footer/Footer";
import Navbar from "../Share/Navbar/Navbar";


const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;