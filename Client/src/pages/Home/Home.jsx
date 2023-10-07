import"./home.css";
import Header from  "../../component/header/Header"
import Slidebar from "../../component/slidebar/Slidebar";
import Posts from "../../component/posts/Posts";


import axios from "axios";
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Home() {

  const [posts, setPosts] = useState([])
  const {search} = useLocation()


  useEffect(()=>{
    const fetchPosts = async ()=> {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPosts()
  },[search]) 
  return (
   

    //    <>
    //    <Header/>
    //    <div className="home">
    //     <Post/>
    //     <Slidebar/>
    //    </div>
       
    //    </>

    <>
    <Header/>
    <div className="home">
        <Posts  posts={posts}/>
        <Slidebar/>
    </div>
        </>
    
  )
}
