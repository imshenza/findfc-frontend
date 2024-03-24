import React from 'react'
import "./Poster.css"

const PosterVw = ({ title, time, venue, imageUrl }) => {
    return (
    <div className="poster">
      {imageUrl && <img src={imageUrl} alt={title} className="poster-image" />}
      <div className="poster-details">
        <p id='poster-details-text'>Time: {time}</p>
        <p id="poster-details-text">Venue: {venue}</p>
        <div className="editbtn">
        <input type="button" className='viewbtn' value="edit" />
        <input type="button" className='viewbtn' value='delete' />
        </div>
        
      </div>
    </div>
  )
}

export default PosterVw