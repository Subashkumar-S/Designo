import { Link } from "react-router-dom"
import data from "../data.json"
// import { mobileHomeWebDesign } from "../assets"
export default function Projects (){
    return (
    <div className="w-full h-20">
        {
            data.categories.map((category) => (
                <div key={category.category} className={`bg-mobileHomeWebDesign `}>
                    <h2>{category.category}</h2>
                    <Link to={category.link}>View projects</Link>
                </div>
                
            ))
        }
    </div>
    )
}