
import "./Navbar.css"
import { MenuIcon, Moon } from "lucide-react"

const Navbar = ({handleClick1, backgroundColor}) => {

    return (
        <>

            <div className="navItems">

                <div className="logoText">
                    <h1>Precious</h1>
                </div>

                <nav className="navLinks">
                    <ul>
                        <li>Home</li>
                        <li>Topics</li>
                        <li>About</li>

                        <div className="darkMoodBtn">
                            <Moon size={30} onClick={handleClick1} className={backgroundColor} />
                        </div>

                        <div className="menuIcon_writePost">
                            <p>Write post</p>
                            <MenuIcon size={30} id="menuIcon" />
                        </div>
                    </ul>
                </nav>
            </div>

        </>
    )
}

export default Navbar