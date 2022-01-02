import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ShowCase from './components/ShowCase'

function App() {
  return (
    <div className='wrapper'>
     <Navbar/>
     <Hero/>
     <ShowCase/>
    </div>
  )
}

export default App
