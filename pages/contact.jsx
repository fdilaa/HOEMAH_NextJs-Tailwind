import React from 'react'
import Contact from '../components/Contact'
import Home from '../components/Home'

const contact = () => {
  return (
    <div>
        <Home heading='Contact' message='Submit the form below for more info.' />
        <Contact />
    </div>
  )
}

export default contact