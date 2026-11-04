
import "./Navbar.css"
import { MenuIcon, Moon } from "lucide-react"
import { Link } from "react-router"

const Navbar = ({ handleClick1, backgroundColor }) => {

    return (
        <>

            <div className="navItems">

                <div className="logoText">

                    <Link to="/" style={{textDecoration: "none", color: "black"}}>
                        <h1>Precious</h1>
                    </Link>
                </div>

                <nav className="navLinks">
                    <ul>
                        <Link to="/" style={{ textDecoration: "none", color: "black" }}><li>Home</li></Link>
                        <Link to="/topics" style={{ textDecoration: "none", color: "black" }}><li>Topics</li></Link>
                        <Link to="/about" style={{ textDecoration: "none", color: "black" }}><li>About</li></Link>

                        <div className="darkMoodBtn">
                            <Moon size={30} onClick={handleClick1} className={backgroundColor} />
                        </div>

                        <div className="menuIcon_writePost">

                            <Link to="/writePost" style={{ textDecoration: "none", color: "black" }}><p>Write post</p></Link>
                            <MenuIcon size={30} id="menuIcon" />
                        </div>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default Navbar