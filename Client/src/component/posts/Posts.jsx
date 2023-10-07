import Create from "../create/Create"
import "./posts.css"

export default function Posts({posts}) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Create create={p}/>
        
      ))}
     
        
       
    </div>
  );
}
