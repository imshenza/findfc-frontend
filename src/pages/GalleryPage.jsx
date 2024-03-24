import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './GalleryPage.css';
import Header from '../components/Header';

const GalleryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [nameSuggestions, setNameSuggestions] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [eventImages, setEventImages] = useState([]);

  useEffect(() => {
    if (selectedEvent) {
      fetchEventImages(selectedEvent);
    }
  }, [selectedEvent]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Fetch name suggestions from Django backend
    fetchNameSuggestions(query);
  };

  const fetchNameSuggestions = async (query) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/events/?search=${query}`);
      setNameSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching name suggestions:', error);
    }
  };

  const handleSuggestionClick = (selectedEvent) => {
    setSelectedEvent(selectedEvent);
  };

  const fetchEventImages = async (event) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/events/${event.id}/images/`);
      setEventImages(response.data);
    } catch (error) {
      console.error('Error fetching event images:', error);
    }
  };

  return (
    <div className="gallery">
      <Header />
      <div className="gallery-page">
        <h1>Gallery</h1>
        <div className="search-container">
          {/* Search Bar */}
          <input
            id="searchbar"
            type="text"
            placeholder="Search for events..."
            value={searchQuery}
            onChange={handleSearchChange}
          />

          {/* Name Suggestions */}
          <ul className="suggestions-list">
            {nameSuggestions.map((suggestion) => (
              <li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Display Event Images */}
        {selectedEvent && (
          <div className="event-images">
            <h2>{selectedEvent.name} Images</h2>
            <div className="images-container">
              {eventImages.map((image) => (
                <img key={image.id} src={image.url} alt={image.title} className="event-image" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
