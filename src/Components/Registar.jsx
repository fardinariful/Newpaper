import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext } from "react";
import { Authcontext } from "../Provider/Authprovider";

const Registar = () => {
  const {createUser,setuser}=useContext(Authcontext)
  const handlesubmitreg=e=>{
    e.preventDefault();
    const Form=new FormData(e.target);
    const name=Form.get("name");
    const photo=Form.get("photo");
    const email=Form.get("email");
    const password=Form.get("password");
    console.log({name,photo,email,password});

    createUser(email,password)
    .then(result=>{
      const user=result.user
      setuser(user)
      console.log(user);
    })
    .catch(error=>{
      console.log(error.message,error.code)
    })
  }
    return (
        <div>
            <Navbar></Navbar>
         <div className="hero  min-h-screen">
  <div className=" flex-col ">
    <div>
      <h1 className="text-5xl font-bold">Register your account</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl  mt-5">
      <form onSubmit={handlesubmitreg} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo  Url</span>
          </label>
          <input type="Photo  Url" name="photo" placeholder="Photo  Url" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register Now</button>
        </div>
      </form>
      <h2>Already have an account? <Link to="/login">Login</Link></h2>
    </div>
  </div>
</div>
        </div>
    );
};

export default Registar;