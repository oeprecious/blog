import "./Hero.css"
import MyNoteImage from "../assets/images/myNote.png"
import { Link } from "react-router"
import { posts } from "../data/posts"

const Hero = () => {
    return (
        <>

                <div className="heroContainer">
                    <div className="heroImageCard">
                        <img src={MyNoteImage} alt="Code from MyNotes app" id="heroImage" />
                    </div>

                    <div className="headingText">

                        <div className="heroIntroText">
                            <p>REACT &bull; FEATURED</p>
                        </div>

                        <h1>Why my React state was not updating, and the one-line fix</h1>

                        <div className="subHeading">
                            <p>A short note from building MyNotes: what I misunderstood about state,</p>
                            <p>and how I found it.</p>
                        </div>

                        <div className="author">
                            <p>Precious &bull; Oct 31 &bull; 4 min read</p>
                        </div>

                        <div className="readPost">
                            <Link to={`/post/0`} style={{textDecoration: "none"}}>
                            <p>Read post &rarr;</p>
                            </Link>
                        </div>
                    </div>

                </div>
          
        </>
    )
}
export default Hero