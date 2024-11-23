import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex items-center gap-2 bg-base-200 p-2">
           <p className="text-white bg-[#D72050] p-3 rounded-md">Latest</p>
           <Marquee className="p-2 space-x-3">
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iste!</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iste!</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iste!</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, iste!</p>
           </Marquee>
        </div>
        
    );
};

export default LatestNews;