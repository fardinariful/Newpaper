import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const Authcontext=createContext();
const auth = getAuth(app);
const Authprovider = ({children}) => {
    const [user,setuser]=useState(null);
    console.log(user)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logout=()=>{
        return signOut(auth);
    }
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const authinfo={
        user,
        setuser,
        createUser,
        logout,
        login
    };


    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth ,currentuser=>
        {
            setuser(currentuser);
        }
        )
        return ()=> unsubscribe();
    },[])
    return (
       <Authcontext.Provider value={authinfo}>{children}</Authcontext.Provider>
    );
};

export default Authprovider;