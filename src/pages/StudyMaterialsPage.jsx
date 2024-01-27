// src/pages/StudyMaterialsPage.js
// src/pages/StudyMaterialsPage.js
import React, { useState } from 'react';
import './StudyMaterialsPage.css'; // Import the CSS file
import BackButton from '../components/BackButton';
import Header from '../components/Header';
// ... rest of the code


const StudyMaterialsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSubmit = () => {
    // Handle the submission logic (redirect or perform actions based on selected options)
    console.log('Selected Category:', selectedCategory);
    console.log('Selected Year:', selectedYear);
    console.log('Selected Type:', selectedType);
  };

  return (
    <div className="studymaterials">
      <Header/>
      <div className="study-materials-page">
      <h2 id='study-mat-text'>Study Materials</h2>
      <form>
        {/* Dropdown for Category (UG/PG) */}
        <label>
          Category:
          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>
        </label>

        {/* Dropdown for Year (1, 2, 3) */}
        <label>
          Year:
          <select value={selectedYear} onChange={handleYearChange}>
            <option value="">Select Year</option>
            <option value="1">Year 1</option>
            <option value="2">Year 2</option>
            <option value="3">Year 3</option>
          </select>
        </label>

        {/* Dropdown for Material Type (Notes, Textbooks, Previous Year Papers) */}
        <label>
          Material Type:
          <select value={selectedType} onChange={handleTypeChange}>
            <option value="">Select Material Type</option>
            <option value="Notes">Notes</option>
            <option value="Previous Year Papers">Previous Year Papers</option>
          </select>
        </label>

        {/* Submit Button */}
        <button type="button" id='study-mat-button' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default StudyMaterialsPage;

