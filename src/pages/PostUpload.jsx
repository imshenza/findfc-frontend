import React, { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import axios from "axios";
import "./PostUpload.css";

const PosterUpPage = () => {
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    date: "",
    time: "",
    venue: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setFormData({ ...formData, image: imageFile });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const { image, title, date, time, venue } = formData;
    const data = new FormData();
    data.append("image", image);
    data.append("title", title);
    data.append("date", date);
    data.append("time", time);
    data.append("venue", venue);

    try {
      console.log("Uploading poster data:", formData);
      await axios.post("http://localhost:8000/adminDash/upload_event/", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(data);
      // Handle successful upload
    } catch (error) {
      console.error("Error uploading poster:", error);
      // Handle error here
    }
  };

  return (
    <div>
      <AdminHeader />
      <div className="upl">
        <form onSubmit={handleUpload}>
          <label className="labels" htmlFor="image">
            Select Image
          </label>
          <input type="file" name="image" onChange={handleImageChange} />
          <br />
          <label className="labels" htmlFor="title">
            Event Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
          <br />
          <label className="labels" htmlFor="date">
            Select Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
          <br />
          <label className="labels" htmlFor="time">
            Select Time
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
          />
          <br />
          <label className="labels" htmlFor="venue">
            Venue
          </label>
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleInputChange}
          />
          <br />
          <button type="submit">Upload</button>
        </form>
      </div>
    </div>
  );
};

export default PosterUpPage;
