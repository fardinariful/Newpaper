import { Link, useLoaderData } from "react-router-dom";
import Header from "./Header";
import Rightnavbar from "./Rightnavbar";

const Newsdetails = () => {
    const data=useLoaderData();
    console.log(data.data[0]);
    return (
        <div>
            <Header></Header>
            <div className="w-11/12 mx-auto grid grid-cols-12 gap-4">
             <section className="col-span-9">
             <div className="card bg-base-100  shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={data.data[0]?.image_url}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{data.data[0]?.title}</h2>
    <p>{data.data[0]?.details}</p>
    <div className="card-actions">
      <Link to={`/category/${data.data[0]?.category_id}`} className="btn btn-primary">Back to Home</Link>
    </div>
  </div>
</div>




             </section>
             <aside className="col-span-3">
                <Rightnavbar></Rightnavbar>
             </aside>
            </div>
            <h2>News</h2>
        </div>
    );
};

export default Newsdetails;