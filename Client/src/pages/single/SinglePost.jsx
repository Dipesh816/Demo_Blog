import SinglePst from "../../component/singlepst/SinglePst"
import Slidebar from "../../component/slidebar/Slidebar"
import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="single">
        <SinglePst/>
        <Slidebar/>
    </div>
  )
}
