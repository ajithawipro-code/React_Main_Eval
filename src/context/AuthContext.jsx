import React from "react";
import { createContext } from "react";
import { useState, useEffect } from "react";


export const AuthContext=createContext();

const AuthProvider=({children})=>{

    const[isAuth,setIsAuth]=useState(false);
    useEffect(()=>{

        const saved= localStorage.getItem("isAuth");
        if(saved==="true")
        setIsAuth(true)
    },[]);

    const login =(email,password)=>{

        if(email==="admin@gmail.com" && password==="admin1234")
        {

            localStorage.setItem("isAuth","true");
            setIsAuth(true);
            return true;
        }
        else{
            alert("Invalid credentials");
            return false;
        }

    };

    const logout=()=>{

        localStorage.removeItem("isAuth");
        setIsAuth(false);
    }

    return (

        <AuthContext.Provider value={{isAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

    
}
export default AuthProvider;

