import { useState } from "react";
import { logoDark, hamburger, close } from "../assets"
import { Link } from "react-router-dom"
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }

    const links = [{path: "/about", page: "About"}, {path: "/contact", page: "Contact"}, {path: "/location", page: "Location"}] 
    return (
        <div className="w-full flex justify-between items-center relative">
            <div className=" flex justify-between items-center py-4 px-8">
                <Link to="/">
                    <img src={logoDark} alt="logo" className="w-52" />
                </Link>
                <button className="md:hidden" onClick={handleClick}>
                    {open === true ? <img src={close} alt="close" /> : <img src={hamburger} alt="hamburger" />}
                </button>
            </div>
            <nav className={`absolute md:right-0 ${open ? "w-[90%] bg-slate-500 top-10 mx-[5%] rounded-md" : "w-1/2 max-md:-top-10"}`}>
                <ul className={`text-xl ${open ? "text-center my-2" : "flex flex-1 items-center justify-around"}`}>
                    {links.map(link => (
                        <li key={link.path}>
                            <Link to={link.path}>{link.page}</Link>
                        </li>
                    )) }
                </ul>
            </nav>
        </div>

    )
}