import { Link } from "react-router-dom"
import "./create.css"

export default function Create({create}) {
  const PP = "http://localhost:5000/img/"
  return (
    <div className="create">
      {create.photo && (
        <img className="postImg"
        src={PP + create.photo}
         alt="" />)}

        <div className="createInfo">
            <div className="createMountain">
              {
                create.categories.map((c)=>(
                  <span className="createMountain">{c.name}</span>
                 
                ))
              }
            </div>
            <Link to={`/create/${create._id}`} className="link"> <span className="createTitle">
                {create.title}
            </span></Link>
           
            <p className="Desc">{create.desc}

</p>
            
        </div>
    </div>
  )
}
