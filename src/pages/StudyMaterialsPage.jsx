// src/pages/StudyMaterialsPage.js
import React, { useState } from 'react';
import './StudyMaterialsPage.css'; // Import the CSS file
import Header from '../components/Header';

const StudyMaterialsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedType, setSelectedType] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedYear(''); // Reset selected year when category changes
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

  // Define the options for Year based on selected Category
  let yearOptions = (
    <>
      <option value="">Select Year</option>
      <option value="1">Year 1</option>
      <option value="2">Year 2</option>
      <option value="3">Year 3</option>
    </>
  );

  if (selectedCategory === 'PG') {
    yearOptions = (
      <>
        <option value="">Select Year</option>
        <option value="1">Year 1</option>
        <option value="2">Year 2</option>
      </>
    );
  }

  return (
    <div className="studymaterials">
      <Header />
      <div className="study-materials-page">
        <h2 id="study-mat-text">Study Materials</h2>
        <form className='studyform'>
          <label htmlFor="category" className='labl'>Category:</label>
          <select className='selct' id="category" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select Category</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>

          <label htmlFor="year" className='labl'>Year:</label>
          <select className='selct' id="year" value={selectedYear} onChange={handleYearChange}>
            {yearOptions}
          </select>

          <label htmlFor="type" className='labl'>Material Type:</label>
          <select id="type" className='selct' value={selectedType} onChange={handleTypeChange}>
            <option value="">Select Material Type</option>
            <option value="Notes">Notes</option>
            <option value="Previous Year Papers">Previous Year Papers</option>
          </select>

          <button className='buton' type="button" id="study-mat-button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudyMaterialsPage;
