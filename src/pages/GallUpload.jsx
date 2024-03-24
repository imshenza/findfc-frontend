
import React, { useState, useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import axios from "axios";
import "./GallUpload.css";

const GallUpload = () => {
  const [formData, setFormData] = useState({
    file: null,
    eventName: "",
    uploadType: ""
  });

  const [eventNames, setEventNames] = useState([]);

  useEffect(() => {
    fetchEventNames();
  }, []);

  const fetchEventNames = async () => {
    try {
      const response = await axios.get("http://localhost:8000/adminDash/event_names");
      setEventNames(response.data);
    } catch (error) {
      console.error("Error fetching event names:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, file });
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const { file, eventName, uploadType } = formData;
    const data = new FormData();
    data.append("file", file);
    data.append("eventName", eventName);
    data.append("uploadType", uploadType);

    try {
      console.log("Uploading file data:", formData);
      await axios.post("http://localhost:8000/adminDash/upload_gallery/", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(data);
      // Handle successful upload
    } catch (error) {
      console.error("Error uploading file:", error);
      // Handle error here
    }
  };

  return (
    <div>
      <AdminHeader />
      <div className="upload-container">
        <form onSubmit={handleUpload}>
          <label className="upload-label" htmlFor="file">
            Select File
          </label>
          <input type="file" name="file" onChange={handleFileChange} />
          
          <label className="upload-label" htmlFor="eventName">
            Event Name
          </label>
          <select
            name="eventName"
            value={formData.eventName}
            onChange={handleInputChange}
          >
            <option value="">Select Event</option>
            {eventNames.map((eventName) => (
              <option key={eventName.id} value={eventName.name}>
                {eventName.name}
              </option>
            ))}
          </select>
          
          <label className="upload-label" htmlFor="uploadType">
            Upload Type
          </label>
          <select
            name="uploadType"
            value={formData.uploadType}
            onChange={handleInputChange}
          >
            <option value="photo">Photo</option>
            <option value="video">Video</option>
          </select>

          <button type="submit" className="upload-button">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default GallUpload;
