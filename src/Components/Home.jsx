import { Outlet } from "react-router-dom";
import Leftnavbar from "./Leftnavbar";
import Navbar from "./Navbar";
import Rightnavbar from "./Rightnavbar";
import Header from "./Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className=" w-11/12 mx-auto grid grid-cols-12 gap-3">
                <aside className="left col-span-3">
                    <Leftnavbar></Leftnavbar>
                </aside>
                <section className=" col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3">
                    <Rightnavbar></Rightnavbar>
                </aside>
            </div>
        </div>
    );
};

export default Home;