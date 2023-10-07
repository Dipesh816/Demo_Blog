import { useLocation } from 'react-router-dom'
import './singlePst.css'
import { useEffect, useState,useContext } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { Context } from "../../content/Context"


export default function SinglePst() {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [post,setPost] = useState({})
  const {user} = useContext(Context);
  const PP = "http://localhost:5000/img/"
  const [title ,setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [update, setUpdate] = useState(false)


  useEffect(()=>{
    const getPost = async ()=>{
      const res  =  await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title)
      setDesc(res.data.desc)

    };
    getPost()
  },[path])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate= async () =>{
    
   try{
       await axios.put(`/posts/${post._id}`, 
        {username:user.username,title,desc});
       setUpdate(false)
   }catch(err){}
  }

  return (
    <div className='singlePst'>
        <div className="singlePstWrapper">
          {post.photo && (
                <img className='singlePstImg' 
                  src={PP + post.photo}
                alt="" />
          )} {
            update ? <input type="text" value={title}  
                  className='singlePstTitleInput'
                    onChange={(e)=>setTitle(e.target.value)} /> :(
              <h1 className="singlePstTitle">
              {title}
              {post.username === user?.username && (
                  <div className="singlePstEdit">
                      <i className="singlePstIcon far fa-edit"
                                   onClick={()=>setUpdate(true)}></i>
                      <i className="singlePstIcon far fa-trash-alt"
                                    onClick={handleDelete}></i>

               </div>
              )}
             
           </h1>
            )
          }
          
             
             <div className="singlePstInfo">
                <span className='singlePstAuthor'>Author: 
                <Link to={`/?user=${post.username}`} className='link'><b>{post.username}</b></Link>
                </span>
             </div>

             {
              update ? (
                <textarea  className="singlePstDescInput" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
              ):(<p className='singlePstDesc'>{post.desc}</p>)
             }

             {update && (
                  <button className="Update" onClick={handleUpdate}>Update</button>
             )}
             
        </div>
    </div>
  )
}
