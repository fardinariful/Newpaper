import { useEffect, useState } from "react";
import Category from "./Category";

const Leftnavbar = () => {
    const [categories,setcategories]=useState([]);
    useEffect(()=>
    {
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res=>res.json())
        .then(data=>setcategories(data.data.news_category))
    }
        ,[])
    return (
        <div className="space-y-3">
            <h2 className="font-semibold text-[#403F3F]">All Category : {categories.length}</h2>
            {
                categories.map(category=><Category key={category.category_id} category={category}></Category>)
            }
        </div>
    );
};

export default Leftnavbar;