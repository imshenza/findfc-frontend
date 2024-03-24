import React, { useState, useEffect } from "react";
import AdminHeader from "../components/AdminHeader";
import axios from "axios";
import "./GallView.css";

const GallView = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      const response = await axios.get("http://localhost:8000/adminDash/gallery_items");
      setGalleryItems(response.data);
    } catch (error) {
      console.error("Error fetching gallery items:", error);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/adminDash/delete_gallery_item/${itemId}`);
      if (response.status === 200) {
        setGalleryItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
        console.log('Gallery item deleted successfully');
      }
    } catch (error) {
      console.error("Error deleting gallery item:", error);
    }
  };

  return (
    <div>
      <AdminHeader />
      <div className="gallery-items-container">
        <h2>Uploaded Gallery Items</h2>
        {galleryItems.length > 0 ? (
          <div className="gallery-items-list">
            {galleryItems.map((item) => (
              <div key={item.id} className="gallery-item">
                {item.uploadType === "photo" ? (
                  <img src={item.fileUrl} alt={item.eventName} className="gallery-image" />
                ) : (
                  <video controls className="gallery-video">
                    <source src={item.fileUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <div className="gallery-item-details">
                  <p><strong>Event Name:</strong> {item.eventName}</p>
                  <p><strong>Upload Type:</strong> {item.uploadType}</p>
                  <p><strong>Uploaded At:</strong> {item.uploadedAt}</p>
                </div>
                <div className="gallery-item-actions">
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No gallery items uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default GallView;
