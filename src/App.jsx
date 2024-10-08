import { useEffect, useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Card from "./components/Header"
import src1 from "./assets/images/abyss-watchers.png"
import src2 from "./assets/images/abyss-watchers.png"
import src3 from "./assets/images/abyss-watchers.png"
import src4 from "./assets/images/abyss-watchers.png"
import src5 from "./assets/images/abyss-watchers.png"
import src6 from "./assets/images/abyss-watchers.png"
import src7 from "./assets/images/abyss-watchers.png"
import src8 from "./assets/images/abyss-watchers.png"

function App() {

  const [images, setImages] = useState([])
  const [score, setScore] = useState(0);

  useEffect(() => {
    //load images
  }, [])

  useEffect(() => {
    //shuffle images
  }, [score])

  //updates clicked boolean of image, updates score depending 
  function handleClick()
  {

  }

  //header takes score state
  //render cards and pass src, id, handleclick
  return (
    <>
      <Header />

      <img src= {src1} alt="" className=''/>
    </>
  )
}

export default App
