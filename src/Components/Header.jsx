import moment from "moment";
import logo from "../assets/logo.png"
import LatestNews from "./LatestNews";
const Header = () => {
    return (
        <>
        <div className="flex flex-col justify-center items-center gap-2">
            <img src={logo} alt="" />
            <h2 className="text-gray-500 text-2xl">Journalism Without Fear or Favour</h2>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
       <div className="w-11/12 mx-auto text-left">
       <LatestNews></LatestNews>
       </div>
        
        </>
    );
};

export default Header;