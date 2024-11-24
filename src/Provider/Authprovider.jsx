import { createContext, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const Authcontext=createContext();
const auth = getAuth(app);
const Authprovider = ({children}) => {
    const [user,setuser]=useState(null);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const authinfo={
        user,
        setuser,
        createUser,
    };

    return (
       <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
    );
};

export default Authprovider;