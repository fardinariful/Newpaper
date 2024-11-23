const Category = ({category}) => {
    const {category_name}=category;
    return (
        <div className="flex flex-col justify-center ">
            <button className="btn space-y-6 rounded-xl">{category_name}</button>
            
        </div>
    );
};

export default Category;