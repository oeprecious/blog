import "./Home.css"
import Hero from "../Components/Hero"
import FilteredItems from "../Components/FilteredItems"
import FeaturedCard from "../Components/FeaturedCard"
import { useState } from "react"

const Home = () => {

    const [activeTopic, setActiveTopic]= useState("All")

    return (
        <>
        <div className="container">

            <div className="homeCard">
               <Hero/>
               <FilteredItems activeTopic={activeTopic} setActiveTopic={setActiveTopic}/>
            <FeaturedCard/>
            </div>
            
        </div>
      
        </>
    )
}

export default Home