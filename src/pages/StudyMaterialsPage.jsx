import React, { useState, useEffect } from "react";
import "./StudyMaterialsPage.css"; // Import the CSS file
import Header from "../components/Header";

const StudyMaterialsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [studyMaterials, setStudyMaterials] = useState([]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedYear(""); // Reset selected year when category changes
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleSubmit = () => {
    // Handle the submission logic (fetch study materials based on selected options)
    fetchStudyMaterials(selectedCategory, selectedYear, selectedType);
  };

  const fetchStudyMaterials = async (category, year, type) => {
    try {
      const response = await fetch(
        `http://localhost:8000/study-materials/?category=${category}&year=${year}&type=${type}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setStudyMaterials(data);
    } catch (error) {
      console.error("Error fetching study materials:", error);
    }
  };

  useEffect(() => {
    fetchStudyMaterials(selectedCategory, selectedYear, selectedType);
  }, [selectedCategory, selectedYear, selectedType]);

  // Define the options for Year based on selected Category
  let yearOptions = (
    <>
      <option value="">Select Year</option>
      <option value="1">Year 1</option>
      <option value="2">Year 2</option>
      <option value="3">Year 3</option>
    </>
  );

  if (selectedCategory === "PG") {
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
        <form className="studyform">
          <label htmlFor="category" className="labl">
            Category:
          </label>
          <select
            className="selct"
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Select Category</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>

          <label htmlFor="year" className="labl">
            Year:
          </label>
          <select
            className="selct"
            id="year"
            value={selectedYear}
            onChange={handleYearChange}
          >
            {yearOptions}
          </select>

          <label htmlFor="type" className="labl">
            Material Type:
          </label>
          <select
            id="type"
            className="selct"
            value={selectedType}
            onChange={handleTypeChange}
          >
            <option value="">Select Material Type</option>
            <option value="Notes">Notes</option>
            <option value="Previous Year Papers">Previous Year Papers</option>
          </select>

          <button
            className="buton"
            type="button"
            id="study-mat-button"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>

        <div className="study-materials-list">
          {studyMaterials.map((material) => (
            <div key={material.id} className="study-material">
              <h3>{material.title}</h3>
              <p>Category: {material.category}</p>
              <p>Year: {material.year}</p>
              <p>Type: {material.type}</p>
              <a
                href={material.file_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyMaterialsPage;
