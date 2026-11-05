import "./FilteredItems.css"

const FilteredItems = ({ activeTopic, setActiveTopic }) => {

    return (
        <>

            <div className="filteredContainer">
                <div className="filteredCard">
                    <span id="blue" onClick={() => { setActiveTopic("All") }} className={activeTopic === "All" ? "active" : ""}>All</span>
                    <span onClick={() => { setActiveTopic("HTML") }} className={activeTopic === "HTML" ? "active" : ""}>HTML</span>
                    <span onClick={() => { setActiveTopic("CSS") }} className={activeTopic === "CSS" ? "active" : ""}>CSS</span>
                    <span onClick={() => { setActiveTopic("JAVASCRIPT") }} className={activeTopic === "JAVASCRIPT" ? "active" : ""}>JAVASCRIPT</span>
                    <span onClick={() => { setActiveTopic("REACT") }} className={activeTopic === "REACT" ? "active" : ""}>REACT</span>
                    <span onClick={() => { setActiveTopic("FIGMA") }} className={activeTopic === "FIGMA" ? "active" : ""}>FIGMA</span>

                </div>
            </div>
        </>
    )
}

export default FilteredItems