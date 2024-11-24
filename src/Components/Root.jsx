import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";

const Root = () => {
    return (
        <div>
            
           
            <Outlet></Outlet>
        </div>
    );
};

export default Root;