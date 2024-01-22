import React from 'react'
import { Link } from 'react-router-dom';
import "./BackButton.css"

const BackButton = () => {
  return (
    <div>
        <Link to="/">
        <button className='back-button'>Back</button>
      </Link>
    </div>
  )
}

export default BackButton