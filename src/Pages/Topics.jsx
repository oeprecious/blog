import "./Topics.css"

const Topics = () => {

    const topics = [

        { id: 1, topic: "HTML", tag: "Structure and semantics", postCount: "0 post" },

        { id: 2, topic: "CSS", tag: "Layout, media queries and responsive design", postCount: "1 post" },

        { id: 3, topic: "JavaScript", tag: "Logic, arrays and saving data in the browser", postCount: "1 post" },

        { id: 4, topic: "React", tag: "State, routing, and components", postCount: "0 post" },

        { id: 5, topic: "Figma", tag: "Wireframes, style guides and prototype", postCount: "1 post" },

        { id: 6, topic: "All posts", tag: "Every post in one place.", postCount: "3 post" }
    ]

    return (
        <>

            <div className="topicsContainer">
                <p id="topicsText">Topics</p>

                <div className="topicsHeadingText">
                    <h1>Browse by topic</h1>

                    <div className="subheadingText">
                        <p>Everything I write about while learning to build for the web.</p>
                    </div>
                </div>
            </div>

            <div className="topicsCardContainer">
                {topics.map((items) => (
                    <div className="card" key={items.id}>
                        <h3>{items.topic}</h3>
                        <p>{items.tag}</p>
                        <p>{items.postCount}</p>
                    </div>
                ))}
            </div>

        </>
    )
}

export default Topics