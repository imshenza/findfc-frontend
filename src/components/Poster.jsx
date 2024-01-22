// src/components/Poster.js
import React from 'react';
import './Poster.css';

const Poster = ({ title, time, venue, imageUrl }) => {
  return (
    <div className="poster">
      {imageUrl && <img src={imageUrl} alt={title} className="poster-image" />}
      <div className="poster-details">
        <p id='poster-details-text'>Time: {time}</p>
        <p id="poster-details-text">Venue: {venue}</p>
      </div>
    </div>
  );
};

export default Poster;


