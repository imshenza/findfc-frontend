import React, { useState } from "react";
import "./PostUpload.css"; // Import CSS file for styling
import AdminHeader from "../components/AdminHeader";
import axios from "axios"; // Import Axios for making HTTP requests

const PostUpload = () => {
  const [formData, setFormData] = useState({
    image: null,
    date: "",
    time: "",
    venue: "", // Added venue field
  });

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const { image, date, time, venue } = formData;
    const data = new FormData();
    data.append("image", image);
    data.append("date", date);
    data.append("time", time);
    data.append("venue", venue); // Appending venue value
    try {
      console.log("Uploading event data:", formData);
      // Send POST request to Django backend using Axios
      await axios.post(
        "http://localhost:8000/adminDash/upload_event/",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(data);
      // Handle successful upload
    } catch (error) {
      console.error("Error uploading event:", error);
      // Handle error here, e.g., show error message to user
    }
  };

  return (
    <div className="p">
      <AdminHeader />
      <div className="post-upload">
        <div className="image-upload">
          {formData.image ? (
            <img src={formData.image} alt="Uploaded" />
          ) : (
            <label htmlFor="file-upload" className="custom-file-upload">
              Select Image
            </label>
          )}
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="details">
          <form onSubmit={handleUpload} className="max-w-lg">
            <label>Venue:</label> {/* Added venue label and input */}
            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleInputChange}
            />
            <label>Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
            <label>Time:</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
            />
            <button className="upload-button" type="submit">
              UPLOAD
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostUpload;
