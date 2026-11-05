import "./Home.css"
import Hero from "../Components/Hero"
import FilteredItems from "../Components/FilteredItems"
import FeaturedCard from "../Components/FeaturedCard"


const Home = () => {
    return (
        <>
        <div className="container">

            <div className="homeCard">
               <Hero/>
               <FilteredItems/>
            <FeaturedCard/>
            </div>
            
        </div>
      
        </>
    )
}

export default Home