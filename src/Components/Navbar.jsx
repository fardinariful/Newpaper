import { Link, NavLink } from "react-router-dom";
import profile from "../assets/user.png"
import { useContext } from "react";
import { Authcontext } from "../Provider/Authprovider";
const Navbar = () => {
  const {user,logout}=useContext(Authcontext);
  const link= <>
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink to='/details'>News Details</NavLink></li>
  <li><NavLink to='/about'>About</NavLink></li>

  </>
    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
          <div>{user && user.email}</div>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {link}
    </ul>
  </div>
  <div className="navbar-end gap-2">
     <img src={profile} alt="" />
     {
      user && user?. email ? <button onClick={logout} className="btn">Logout</button> :
      ( <Link to="/login"><a className="btn">Login</a></Link>)
     }
    
    
  </div>
</div>
    );
};

export default Navbar;