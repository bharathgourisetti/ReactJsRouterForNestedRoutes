import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('contactinfo');
  }, [])

  return (
    <div>
      <h1>Contact</h1>
      <div className='contactBtns'>
        <button onClick={() => navigate("contactinfo")}>Contact Info</button>
        <button onClick={() => navigate("contactform")}>Contact Form</button>
      </div>
    </div>
  )
}

export default Contact