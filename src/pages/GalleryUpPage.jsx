import React from 'react'
import AdminHeader from '../components/AdminHeader'
import "./PosterUpPage.css"

const GalleryUpPage = () => {
  return (
    <div><AdminHeader/>
    <div className="upl">
    <label className='labels' htmlFor="image">Select Image</label>
<input type="file" name='image'  /><br />
<label className='labels' htmlFor="date">Select Date </label>
<input type="date" name='date'  /><br />
<label className='labels' htmlFor="time">Select Time</label>
<input type="time" name='time'  />
    </div></div>
  )
}

export default GalleryUpPage