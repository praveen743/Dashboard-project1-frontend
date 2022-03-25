import react, { useEffect } from "react";
import axios from "axios";
import './style.css';
import { Link } from "react-router-dom";
 
export default function Topbar({user}) {
    useEffect(async () => {
         var userid = await axios.get("http://localhost:3004/login")
         console.log(userid.data)
      }, [])
    return (
        <div>
             <nav class="navbar  navbar-expand navbar-light bg-white topbar mb-4 static-top shadow"> 

                <div >{user?<button className="btn" id='profile'>{user.email}</button>
                : <Link to='/login'><button className="btn" id='profile'>login</button></Link>}</div>
                    
                        </nav>
                        
                        
        </div>
    )
}