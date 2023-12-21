import { useState } from 'react'
import AboutPage from './components/AboutPage'
import PersonCard from './PersonCard'
import HomePage from './components/HomePAge'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AboutPage/>
     <HomePage/>
   <PersonCard/>
   
    </>
  )
}

export default App
