import { AdminContext } from "../context/AdminContext"
import { useContext } from "react";
import ItemCard from "./ItemCard";

export const ItemList=()=>{

    const { items } = useContext(AdminContext);
    console.log("Items is", items);

    return (
        <div>
            {
                items.map((item)=>(

                    <ItemCard key={item.id} item={item} />
                ))
            }
        </div>
    )


}

