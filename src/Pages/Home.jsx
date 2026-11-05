import "./Home.css"
import Hero from "../Components/Hero"
import FilteredItems from "../Components/FilteredItems"


const Home = () => {
    return (
        <>
        <div className="container">

            <div className="homeCard">
               <Hero/>
               <FilteredItems/>
            </div>
            
        </div>
      
        </>
    )
}

export default Home