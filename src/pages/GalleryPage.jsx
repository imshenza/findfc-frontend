// src/pages/GalleryPage.js
import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import './GalleryPage.css';
import Header from '../components/Header';

const GalleryPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [nameSuggestions, setNameSuggestions] = useState([]);

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Simulate name suggestions based on the search query (you can fetch suggestions from an API)
    const suggestions = simulateNameSuggestions(query);
    setNameSuggestions(suggestions);
  };

  const simulateNameSuggestions = (query) => {
    // Simulate fetching suggestions from an API
    // In a real application, you would fetch suggestions from a server
    const fakeSuggestions = [
      'Fozalava 24',
      'CONCIPT 24',
      'Onam 23',
      'Sports Day 24',
      'Foazlava 23',
      // Add more suggestions as needed
    ];

    return fakeSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(query.toLowerCase())
    );
  };

  const handleSuggestionClick = (selectedEvent) => {
    // Handle when a suggestion is clicked (you can perform further actions)
    console.log('Selected Event:', selectedEvent);
  };

  return (
    <div className="gallery">
      <Header/>

   
    <div className="gallery-page">
      
      
      
      
      <h1>Gallery</h1>
      <div className="search-container">
        {/* Search Bar */}
        <input id="searchbar"
          type="text"
          placeholder="Search for events..."
          value={searchQuery}
          onChange={handleSearchChange}
        />

        {/* Name Suggestions */}
        <ul className="suggestions-list">
          {nameSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default GalleryPage;


