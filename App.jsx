import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('green')

  const changeColour1 = () => {
    setColor("Red")
  }
  const changeColour2 = () => {
    setColor("White")
  }
  const changeColour3 = () => {
    setColor("Blue")
  }
  const changeColour4 = () => {
    setColor("Purple")
  }

  return (
    <>
      <div>
        <button onClick={changeColour1}>Red</button>
        <button onClick={changeColour2}>White</button>
        <button onClick={changeColour3} >Blue</button>
        <button onClick={changeColour4}>Purple</button>

        <div style={{
          height:200,
          width:'100%',
          backgroundColor:color
        }}></div>
      </div>
    </>
  )
}

export default App
