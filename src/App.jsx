import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import Hero from './components/Hero'
import Background from './common/Background'
import { Header } from './layout/Header'
import Profile from './components/Profile'
import Weapons from './components/Weapons'
import Experience from './components/Experience'
import { Projects } from './components/Projects'

function App() {

  return (
    <>
    <Background />
      {/* <LoadingScreen />   */}
      <Header />  
      <Hero />
      <Profile/>
      <Weapons />
      <Experience />
      <Projects />
    </>
  )
}

export default App
