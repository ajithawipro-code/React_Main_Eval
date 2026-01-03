import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { ItemList } from "./ItemList";
import './ItemList.css'


function ItemCard({item}){

    const {updateItem, deleteItem} = useContext(AdminContext);


    function handleUpdate(){

        const newname=prompt("Enter new name",item.name);
        const newaddress=prompt("Enter new address",item.address);
        const newtype=prompt("Enter new address",item.type);
       
        updateItem(item.id,newname,newaddress,newtype);
    }

    function handleDelete()
    {
       deleteItem(item.id);

    }

    
    return (

        <div className="itemcard">
            <p>ID: {item.id}</p>

            <p>Name: {item.name}</p>
             <p>Address: {item.address}</p>
              <p>Type: {item.type}</p>
               <p>Parking: {item.parkingLot}</p>

               <button onClick={handleUpdate}>Update</button>
               <button onClick={handleDelete}>Delete</button>
        </div>

    )


}

export default ItemCard;