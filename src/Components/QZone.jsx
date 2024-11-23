import swim from "../assets/swimming.png"
import cls from "../assets/class.png"
import play from "../assets/playground.png"
const QZone = () => {

    return (
        <div className="bg-gray-300 mt-3 rounded-xl">
             <h2 className="flex justify-start ml-4 pt-3 font-semibold">Q-Zone</h2>
             <div className="px-8 mt-10">
             <img src={swim} alt="" />
             <img src={cls} alt="" />
             <img src={play} alt="" />

             </div>
             

        </div>
    );
};

export default QZone;