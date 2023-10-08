import { useContext,useState } from 'react'
import Slidebar from '../../component/slidebar/Slidebar'
import "./setting.css"
import { Context } from '../../content/Context'
import axios from 'axios'
const PP = "http://localhost:5000/img/"

export default function Setting() {
  const {user} = useContext(Context)
  const [file, setFile] = useState(null);
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId:user._Id,
      username,
      email,
      password
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
        await axios.put("/user/", +user.id,updatedUser);
     
    } catch (err) {}
  };

  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                
            </div>
            <form className='settingsForm' onSubmit={handleSubmit}>
                <label >Profile Picture</label>
                <div className="settingsDP">
                    <img 
                     src={file ? URL.createObjectURL(file) : PP +user.profilePic}
                     alt=""
                      />
                      <label htmlFor="fileInput">
                        <i className='settingsDPIcon far fa-user-circle'></i>
                      </label>
                      <input type="file"
                                       id="fileInput" 
                                        style={{display:"none"}}
                                        onChange={(e) => setFile(e.target.files[0])}  />
                </div>
                <label>UserName</label>
                <input type="text" placeholder={user.username}  onChange={e=>setUserName(e.target.value)}/>
                <label>Email</label>
                <input type="email" placeholder={user.email}   onChange={e=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password"  onChange={e=>setPassword(e.target.value)} />
                <button className="settingsSubmit" type="submit">Update</button>
            </form>
           
        </div>
        <Slidebar/> 
    </div>
  )
}
