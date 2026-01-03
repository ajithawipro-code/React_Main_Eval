import { useState, useContext } from "react";
import { AdminContext } from "../context/AdminContext";

const AddItems=()=>{

    const{ addItem } = useContext(AdminContext);

     const [name,setName]=useState("");
     const[address,setAddress]=useState("");
     const [type,setType]=useState("");
     const[parkingLot,setParkingLot]=useState("");

     const handleAdd=()=>{
        if(!name.trim()|| !address.trim()) return;

        addItem(name,address,type,parkingLot);
        setName("");
        setAddress("");
     }



     return (

        <div>
            <h2>Add Items Here</h2>

            <input  placeholder="Enter Restaurant Name" value={name} onChange={(e)=>setName(e.target.value)} />
            <input  placeholder="Enter Address" value={address} onChange={(e)=>setAddress(e.target.value)} />

            <select value={type} onChange={(e)=>setType(e.target.value)}>
                <option value="Rajasthani">Rajasthani</option>
                  <option value="Gujarati">Gujarati</option>
                    <option value="Mughalai">Mughalai</option>
                      <option value="Jain">Jain</option>
                        <option value="Thai">Thai</option>
                          <option value="NorthIndian">NorthIndian</option>
                            <option value="SouthIndian">SouthIndian</option>
            </select>

            <select value={parkingLot} onChange={(e)=>setParkingLot(e.target.value)}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>

            <button onClick={handleAdd}>Add Details</button>
        </div>
     )


}

export default AddItems;