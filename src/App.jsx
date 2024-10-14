import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
    </>
  )
}

export default App
