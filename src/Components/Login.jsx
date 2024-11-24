import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Login = () => {
    return (
        <div>
            <Navbar></Navbar>
         <div className="hero  min-h-screen">
  <div className=" flex-col ">
    <div>
      <h1 className="text-5xl font-bold">Login your account</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl  mt-5">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <h2>Dont’t Have An Account? <Link to="/register" className="text-red-600 underline">Register</Link> </h2>
    </div>
  </div>

</div>
        </div>
    );
};

export default Login;