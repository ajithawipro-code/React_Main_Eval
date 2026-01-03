import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { ItemList } from "./components/ItemList";
import Login from "./pages/Login";
import AddItems from "./components/AddItems";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Admin from "./pages/Admin";


function App(){

  const {logout} = useContext(AuthContext);

  return (

    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Login />} />
      <Route path ="/login" element={<Login />} />

      <Route path ="/admin" element={
        <ProtectedRoute>
          <Admin />
         
          <ItemList />
          <button onClick={logout}>Logout</button>
        </ProtectedRoute>
      } />
    </Routes>
    </BrowserRouter>
  )



}
export default App;
