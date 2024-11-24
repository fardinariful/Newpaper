import { useContext } from "react";
import { Authcontext } from "../Provider/Authprovider";

const Privateroute = () => {
    const{user}=useContext(Authcontext);
    return (
        <div>
            
        </div>
    );
};

export default Privateroute;