import { useEffect,useState } from 'react';
import './slidebar.css'
import axios from "axios"
import { Link } from 'react-router-dom';




export default function Slidebar() {
  const [cats,setCats]=useState([]);

  useEffect(()=>{
    const getCats = async ()=>{
    const res = await axios.get("/categories")
    setCats(res.data)
  }
  getCats()},[])

  return (
    <div className='slidebar'>
        <div className="slidebarItem">
            <span className='slidebarTitle' style={{textAlign:"center"}}>ABOUT ME</span> <br />
            <img src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=''/>
              <p>Blogs, short for "weblogs," have become an integral part of the internet landscape, serving as platforms for individuals, organizations, and businesses to share information, express ideas, and connect with audiences worldwide. These digital journals have transformed the way we consume information, giving a voice to anyone with an internet connection and a story to tell.</p>
              <div className="slidebarItem">
                <span className="slidebarTitle">CATEGORIES</span>
                <ul className='slidebarList'>
              {cats.map((c)=>(
                <Link to={`/?cat=${c.name}`} className='link'>
                  <li className='slidebarListItem'>{c.name}</li>
                </Link>
              
              

              ))
            }
            </ul>
        </div>

    </div></div>
  )
}
