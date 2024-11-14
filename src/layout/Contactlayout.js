import React from 'react'
import Contact from '../Pages/Contact'
import { Outlet } from 'react-router-dom'

const Contactlayout = () => {
  return (
    <div>
        <Contact />
        <Outlet />
    </div>
  )
}

export default Contactlayout