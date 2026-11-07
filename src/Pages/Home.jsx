import Hero from "../Components/Hero"
import FilteredItems from "../Components/FilteredItems"
import FeaturedCard from "../Components/FeaturedCard"
import { useState, useEffect } from "react"

const Home = () => {
    const [activeTopic, setActiveTopic] = useState("All")

    useEffect(() => {
        const hashPart = window.location.hash
        const searchPart = hashPart.includes("?") ? hashPart.split("?")[1] : window.location.search
        const params = new URLSearchParams(searchPart)
        const topic = params.get("topic")

        if (topic) {
            if (topic.toLowerCase() === "all posts" || topic.toLowerCase() === "all") {
                setActiveTopic("All")
            } else {
                setActiveTopic(topic.toUpperCase())
            }
        }

    }, [])

    return (
        <>
            <div className="container">
                <div className="homeCard">
                    <Hero />
                    <FilteredItems activeTopic={activeTopic} setActiveTopic={setActiveTopic} />
                    <FeaturedCard activeTopic={activeTopic} />
                </div>
            </div>
        </>
    )
}

export default Home