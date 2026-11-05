import "./FeaturedCard.css"
import card1Image from "../assets/images/css.png"
import card2Image from "../assets/images/wireframe.png"
import card3Image from "../assets/images/localStorage.png"

const FeaturedCardImages = () => {

    const featuredCard = [{ id: 1, techStack: "Css", heading: "Making a navbar fixed on mobile", cardPara: "Why fixed worked on desktop but not on phones.", date: "Oct 31| 3min read", cardImage: card1Image },

    { id: 2, techStack: "FIGMA", heading: "From wireframe to React in four steps", cardPara: "How I look Lume Jewels from design to code.", date: "Oct 31| 3min read", cardImage: card2Image },

    { id: 3, techStack: "JAVASCRIPT", heading: "A begginer guide to localStorage", cardPara: "Saving notes in the browser so they stay after a refresh", date: "Oct 31| 4min read", cardImage: card3Image }]

    return (
        <>

            <div className="featuredCardContainer">
                {featuredCard.map((images) => (
                    <div className="imageCard" key={images.id}>
                        <img src={images.cardImage} alt={card1Image} className="headingImages" />
                        <div className="imageContent">
                            <p className="stack">{images.techStack}</p>
                            <h3>{images.heading}</h3>
                            <p className="gray">{images.cardPara}</p>
                            <p className="gray">{images.date}</p>
                        </div>
                    </div>
                ))}
            </div>


        </>
    )
}
export default FeaturedCardImages