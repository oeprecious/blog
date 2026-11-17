import "./FeaturedCard.css"
import { Link } from "react-router"
import { Trash2 } from "lucide-react"

const FeaturedCardImages = ({ activeTopic, allPosts, deletePost }) => {


    const filteredCard = activeTopic === "All" ? allPosts.filter(p => p.id !== 0) : allPosts.filter((item) => item.techStack === activeTopic)


    return (
        <>
            <div className="featuredCardContainer">
                {filteredCard.map((images) => (
                    <Link to={`/post/${images.id}`} key={images.id} className="imageCard" style={{ textDecoration: "none", color: "inherit" }}>
                        <div className="imageCard" style={{ position: "relative" }}>

                                <button className="deleteBtn" onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    deletePost(images.id)
                                }}>
                                    <Trash2 />
                                </button>

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