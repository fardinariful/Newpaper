import { NavLink } from "react-router-dom";

const Category = ({category}) => {
    const {category_name}=category;
    return (
        <div className="flex flex-col justify-center ">
            <NavLink to={`/category/${category.category_id}`} className="px-4 py-3 space-y-6 rounded-xl">{category_name}</NavLink>
            
        </div>
    );
};

export default Category;