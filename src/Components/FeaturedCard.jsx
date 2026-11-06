import "./FeaturedCard.css"
import { posts } from "../data/posts"
import { Link } from "react-router"

const FeaturedCardImages = ({ activeTopic }) => {
    
    const filteredCard = activeTopic === "All" ? posts.filter(p => p.id !== 0) : posts.filter((item) => item.techStack === activeTopic)

    return (
        <>

            <div className="featuredCardContainer">
                {filteredCard.map((images) => (
                    <Link to ={`/post/${images.id}`} key={images.id}  className="imageCard" style={{textDecoration: "none", color: "inherit"}}>
                    <div className="imageCard" key={images.id}>
                        <img src={images.cardImage} alt={images.heading} className="headingImages" />
                        <div className="imageContent">
                            <p className="stack">{images.techStack}</p>
                            <h3>{images.heading}</h3>
                            <p className="gray">{images.cardPara}</p>
                            <p className="gray">{images.date}</p>
                        </div>
                    </div>
                    </Link>
                ))}
                {filteredCard.length === 0 && <p>No posts in this topic yet.</p>}
            </div>
        </>
    )
}
export default FeaturedCardImages