import './App.css'
import Navbar from './Components/Navbar'
import { useState } from 'react'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Topics from "./Pages/Topics"
import WritePost from "./Pages/WritePost"
import { Routes, Route } from 'react-router'

const App = () => {

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

      <div style={{ backgroundColor: backgroundColor, minHeight: "100vh" }} >
        <Navbar handleClick1={handleClick1} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/writePost" element={<WritePost />} />
        </Routes>
      </div>

    </>
  )
}
export default App