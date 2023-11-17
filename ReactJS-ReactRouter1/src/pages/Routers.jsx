import { Routes, Route } from "react-router-dom";
import Login1 from "./Login";
import Home1 from "./home";
import Profile1 from "./profile";
import Error from "../components/404";

const MainRouters = () =>{

    return (

        <Routes>
            <Route path="/Login" element={<Login1/>}/>
            <Route path="/home" element={<Home1/>}/>
            <Route path="/profile" element={<Profile1/>}/>            
            <Route path="*" element={<Error/>}/>            
        </Routes>
    )
}

export default MainRouters; 