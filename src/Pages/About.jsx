import "./About.css"
import Precious from "../assets/images/precious.png"

const About = () => {
    return (
        <>

            <div className="aboutCard">

                <div className="aboutImageCard">
                    <img src={Precious} alt="Picture of Precious" className="aboutImage"/>
                      </div>

                    <div className="aboutContent">
                        <p>About</p>

                        <div className="aboutHeading">
                            <h1>Hi, I am Precious</h1>
                        </div>

                        <div className="aboutPara">
                            I am a frontend developer, that builds with React.
                        </div>

                        <div className="aboutPare2">
                            This blog is where I write down what I learn: HTML, CSS, JavaScript, and React. Writing it out helps me remember it,<br /> and maybe it helps you too.
                        </div>

                        <div className="bulletPoint">
                           <h3>What you will find here</h3> 

                            <ul>
                                <li>Short notes on problems I solved</li>
                                <li>Walkthrough of projects like Lume Jewels and MyNotes</li>
                                <li>Design process notes from figma</li>
                            </ul>
                        </div>

                   
                </div>
            </div>
        </>
    )
}

export default About