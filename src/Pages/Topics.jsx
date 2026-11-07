import "./Topics.css"
import { Link } from "react-router"
import {posts} from "../data/posts"


// const topics = ["ALL, posts", "HTML", "CSS", "JavaScript", "React", "Figma"]

const Topics = () => {

    const topics = [

        { id: 1, topic: "HTML", tag: "Structure and semantics" },

        { id: 2, topic: "CSS", tag: "Layout, media queries and responsive design" },

        { id: 3, topic: "JavaScript", tag: "Logic, arrays and saving data in the browser" },

        { id: 4, topic: "React", tag: "State, routing, and components"},

        { id: 5, topic: "Figma", tag: "Wireframes, style guides and prototype" },

        { id: 6, topic: "All posts", tag: "Every post in one place."}
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
                {topics.map(item => {
                    const count = item.topic === "All posts" ? posts.length : posts.filter(p => p.topic?.toLowerCase() === item.topic?.toLowerCase()).length
                return (
                <Link key={item.id} to={item.topic === "All posts" ? "/" : `/?topic=${item.topic.toLowerCase()}`} style={{textDecoration: "none", color: "inherit"}}>
                    <div className="card">
                        <h2>{item.topic}</h2>
                        <p>{item.tag} posts</p>
                        <p>{count} posts</p>
                    </div>
                </Link>
                )
  })}
            </div>

        </>
    )
}

export default Topics