import './App.css'
import Navbar from './Components/Navbar'
import { useState } from 'react'

const App = () => {
  const [darkMood, setDarkMood] = useState(false)


  const handleClick1 = () => {
    setDarkMood(!darkMood)
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