
import "./Navbar.css"
import { MenuIcon, XIcon, Moon } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router"

const Navbar = ({ handleClick1, backgroundColor }) => {

    const [click, setClick] = useState(false)

    const handleClick = () => {

        if (click) {
            setClick(false)
        } else {
            setClick(true)
        }

    }

    let menuClass = ""
    if (click) {
        menuClass = "active"
    } else {
        menuClass = ""
    }

    let menuIcon = "" 
    if (click) {
        menuIcon = <XIcon className="menu" size={35} onClick={handleClick}/>
    } else {
        menuIcon = ""
        menuIcon = <MenuIcon className="menu" size={35} onClick={handleClick}/>
    }

    return (
        <>

            <div className="navItems">

                <div className="logoText">

                    <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                        <h1>Precious</h1>
                    </Link>
                </div>

                <nav className="navLinks">
                    <ul className={menuClass}>
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}><li>Home</li></Link>
                        <Link to="/topics" style={{ textDecoration: "none", color: "black" }}><li>Topics</li></Link>
                        <Link to="/about" style={{ textDecoration: "none", color: "black" }}><li>About</li></Link>

                        <div className="darkMoodBtn">
                            <Moon size={30} onClick={handleClick1} className={backgroundColor} id="moon"/>
                        </div>

                    </ul>
                    <div className="menuIcon_writePost">

                        <Link to="/writePost" style={{ textDecoration: "none", color: "black" }}><p>Write post</p></Link>
                       
                        {menuIcon}
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar