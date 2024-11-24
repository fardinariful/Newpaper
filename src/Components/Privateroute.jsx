import { useContext } from "react";
import { Authcontext } from "../Provider/Authprovider";
import { Navigate } from "react-router-dom";

const Privateroute = ({children}) => {
    const{user}=useContext(Authcontext);
    if(user && user?.email){
        return children;
    }
    return <Navigate to={"/login"}></Navigate>
};

export default Privateroute;