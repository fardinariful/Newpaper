import { useLoaderData } from "react-router-dom";
import Singlecategorynew from "./Singlecategorynew";

const Categorynews = () => {
    const {data:news}=useLoaderData();
    console.log(news);
    return (
        <div>
            <h2>{news.length} news found in these category</h2>
            {
                news.map(singlenews=> <Singlecategorynew key={singlenews._id} singlenews={singlenews}></Singlecategorynew>)
            }
        </div>
    );
};

export default Categorynews;