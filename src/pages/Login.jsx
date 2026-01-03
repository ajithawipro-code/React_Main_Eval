import { useContext , useState} from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


function Login(){

    const {login} = useContext(AuthContext);

    const navigate=useNavigate();

    const [email,setEmail]=useState("");
    const[password, setPassword]= useState("");

    const handleLogin=()=>{

        const success=login(email,password);
        if(success)
            navigate("/admin");
    }

    return (
       <div>
  <h2> Login Page</h2>

  <input type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
 <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />

 <button onClick={handleLogin}>Login</button>


       </div>


    )


}

export default Login;