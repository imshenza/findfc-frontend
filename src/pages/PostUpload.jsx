import React, { useState } from "react";
import "./PostUpload.css"; // Import CSS file for styling
import AdminHeader from "../components/AdminHeader";

const PostUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    if (imageFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(imageFile);
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  return (
    <div className="p">
        <AdminHeader/>
        <div className="post-upload">
        
      <div className="image-upload">
        {selectedImage ? (
          <img src={selectedImage} alt="Uploaded" />
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
        <label>Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
        />
        <label>Time:</label>
        <input
          type="time"
          value={selectedTime}
          onChange={handleTimeChange}
        />
          {/* {selectedImage && (
          <button className="upload-button" onClick={handleUpload}>
            Upload
          </button>
        )} */}
      </div>
    </div>
    </div>
    
  );
};

export default PostUpload;
