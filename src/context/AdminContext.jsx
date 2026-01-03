import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const AdminContext=createContext();

const AdminProvider=({children})=>{


    
    useEffect(()=>{

        const storedItems=JSON.parse(localStorage.getItem("items"));
        if(storedItems)
        {
            setItems(storedItems);
        }
    },[]);

    const [items,setItems]=useState([]);

        useEffect(()=>{

        localStorage.setItem("items",JSON.stringify(items));
    

    },[items]);




    const addItem=(name,address,type,parkingLot)=>{

        setItems([...items , {id:Date.now(), name, address, type, parkingLot} ])
                    
        }    

    const updateItem=(id,newname,newaddress,newtype)=>{

        setItems(items.map((item)=>item.id===id ? {...items, name:newname, address:newaddress,type:newtype} : item))

    }

    const deleteItem=(id)=>{

        setItems(items.filter((item)=>item.id!==id))
    }


    return (
      <AdminContext.Provider value={{items, addItem,updateItem,deleteItem}}>
        {children}
      </AdminContext.Provider>
    )


}

export default AdminProvider;