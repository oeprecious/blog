import './App.css'
import Navbar from './Components/Navbar'
import { useState } from 'react'

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
      </div>
    </>
  )
}
export default App