import { AdminContext } from "../context/AdminContext"
import { useContext } from "react";
import ItemCard from "./ItemCard";
import './ItemList.css'

export const ItemList=()=>{

    const { items } = useContext(AdminContext);
    console.log("Items is", items);

    return (
        <div className="itemlist">
            {
                items.map((item)=>(

                    <ItemCard key={item.id} item={item} />
                ))
            }
        </div>
    )


}

