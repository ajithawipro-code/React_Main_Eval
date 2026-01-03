import { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { ItemList } from "./ItemList";


function ItemCard({item}){

    const {updateItem, deleteItem} = useContext(AdminContext);


    function handleUpdate(){

        const newname=prompt("Enter new name",item.name);
        const newaddress=prompt("Enter new address",item.address);
        updateItem(item.id,newname,newaddress);
    }

    function handleDelete()
    {
       deleteItem(item.id);

    }

    
    return (

        <div>

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