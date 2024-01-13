import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import WelcomeMsg from '../WelcomeMsg/WelcomeMsg'
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <section className='landingPage'>
        <Sidebar/>
        <WelcomeMsg/>
    </section>
  )
}

export default LandingPage