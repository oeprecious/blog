import "./Topics.css"
import { Link } from "react-router"

import { Code2, Palette, Braces, Atom, PenTool, LayoutGrid } from "lucide-react"

// const topics = ["ALL, posts", "HTML", "CSS", "JavaScript", "React", "Figma"]

const Topics = ({allPosts}) => {

    const topics = [

        { id: 1, icon: <Code2 size={32} />, topic: "HTML", tag: "Structure and semantics" },

        { id: 2, icon: <Palette size={32} />, topic: "CSS", tag: "Layout, media queries and responsive design" },

        { id: 3, icon: <Braces size={32} />, topic: "JavaScript", tag: "Logic, arrays and saving data in the browser" },

        { id: 4, icon: <Atom size={32} />, topic: "React", tag: "State, routing, and components" },

        { id: 5, icon: <PenTool size={32} />, topic: "Figma", tag: "Wireframes, style guides and prototype" },

        { id: 6, icon: <LayoutGrid size={32} />, topic: "All posts", tag: "Every post in one place." }
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
                    const count = item.topic === "All posts" ? allPosts.length : allPosts.filter(p => p.techStack?.toLowerCase() === item.topic?.toLowerCase()).length
                    return (
                        <Link key={item.id} to={item.topic === "All posts" ? "/" : `/?topic=${item.topic.toLowerCase()}`} style={{ textDecoration: "none", color: "inherit" }}>
                            <div className="card">
                                <span style={{ color: "#1877F2", width: "fitContent" }}>{item.icon}</span>
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