import './App.css'
import Navbar from './Components/Navbar'
import { useState, useEffect } from 'react'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Topics from "./Pages/Topics"
import WritePost from "./Pages/WritePost"
import { Routes, Route } from 'react-router'
import Post from './Pages/Post'
import { posts } from './data/posts'

const App = () => {

  const [newPosts, setNewPosts] = useState(() => {
    const savedPosts = localStorage.getItem("newPosts");
    return (savedPosts) ?
      JSON.parse(savedPosts) : []
  })
  
  const allPosts = [...newPosts, ...posts]
  console.log(allPosts)

  //Function thats add Posts

  const addPosts = (heading, techStack, cardImage, fullContent) => {

    const post = {
      id: Date.now(),
      heading: heading,
      cardPara: `${fullContent.slice(0, 100)}...`,
      techStack: techStack,
      date: new Date().toLocaleDateString(),
      cardImage: cardImage,
      fullContent: fullContent
    }
    setNewPosts([...post, newPosts])
    
    console.log(post)
  }

 useEffect(() => {
  localStorage.setItem("newPosts", JSON.stringify(newPosts))
 }, [newPosts])

 console.log(newPosts)


  const usersavedTheme = localStorage.getItem("theme")

  let initialMood = false
  if (usersavedTheme === "black") {
    initialMood = true
  } else {
    initialMood = false
  }

  const [darkMood, setDarkMood] = useState(initialMood)

  const handleClick1 = () => {
    setDarkMood(!darkMood)

    if (darkMood === false) {
      localStorage.setItem("theme", "black")
    } else {
      localStorage.setItem("theme", "white")
    }
  }

  let backgroundColor = ""
  if (darkMood === true) {
    backgroundColor = "black"
  } else {
    backgroundColor = "White"
  }

  return (
    <>

      <div style={{ backgroundColor: backgroundColor }} className="appWrapper">

        <Navbar handleClick1={handleClick1} />

        <main className="appMain">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/writePost" element={<WritePost addPosts={addPosts} />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
        </main>
      </div>

    </>
  )
}
export default App