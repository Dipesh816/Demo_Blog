import { useContext } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../../content/Context";

export default function Topbar() {
  const {user,dispatch} = useContext(Context)

  const handleLogout = ()=>{
    dispatch({type : "LOGOUT" })
  };
  return (
    <div className="top">
      <div className="topLeft">
        <img src="" alt="" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
           <Link className="link" to="/" >HOME</Link>
          </li>
          <li className="topListItem mx-2"><Link className="link" to="/write" >ADD</Link></li>
          <li className="topListItem"><Link className="link" to="/footer" >CONTACT</Link></li>
           <li className="topListItem" onClick={handleLogout}>
            {
              user && "LOGOUT"
            }
           </li>
        </ul>
      </div>
      <div className="topRight">{
       
        user ? (
          <Link to="/setting"> <img
          className="topImg"
          src={user.profilePic}
          alt=""
        /></Link>
         
        ):(
         <ul className="topList" >
          <li className="topListItem">
          <Link className="link" to="/login">LOGIN</Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/register">REGISTER</Link>
          </li>
         </ul>
        )
      }
           
       </div>
      
        
      
    </div>
  );
}