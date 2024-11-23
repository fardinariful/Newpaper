import Leftnavbar from "./Leftnavbar";
import Navbar from "./Navbar";
import Rightnavbar from "./Rightnavbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=" w-11/12 mx-auto grid grid-cols-12 gap-3">
                <aside className="left col-span-3">
                    <Leftnavbar></Leftnavbar>
                </aside>
                <section className=" col-span-6">main content</section>
                <aside className="col-span-3">
                    
                    <Rightnavbar></Rightnavbar>
                </aside>
            </div>
        </div>
    );
};

export default Home;