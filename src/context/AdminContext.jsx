import React from "react";
import { useState } from "react";
import { createContext } from "react";


export const AdminContext=createContext();

const AdminProvider=({children})=>{

    const [items,setItems]=useState([]);

    const addItem=(name,address,type,parkingLot)=>{

        setItems([...items , {id:Date.now(), name, address, type, parkingLot} ])
                    
        }    

    const updateItem=(id,newname,newaddress)=>{

        setItems(items.map((item)=>item.id===id ? {...items, name:newname, address:newaddress} : item))

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