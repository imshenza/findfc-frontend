import React, { useState } from "react";
import "./StudyMaterialsPage.css"; // Import the CSS file
import AdminHeader from "../components/AdminHeader";
import axios from "axios";

const StudyUpload = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState("");

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

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("category", selectedCategory);
    formData.append("year", selectedYear);
    formData.append("type", selectedType);
    formData.append("file", selectedFile);
    formData.append("department", selectedDepartment);

    try {
      const response = await axios.post(
        "http://localhost:8000/upload_study_material/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      // Handle successful upload
    } catch (error) {
      console.error("Error uploading study material:", error);
      // Handle error here
    }
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
      <AdminHeader />
      <div className="study-materials-page">
        <h2 id="study-mat-text">Study Materials</h2>
        <form>
          <label>
            Category:
            <select
              className="values"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Select Category</option>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
            </select>
          </label>

          <label>
            Year:
            <select
              className="values"
              value={selectedYear}
              onChange={handleYearChange}
            >
              {yearOptions}
            </select>
          </label>

          <label>
            Material Type:
            <select
              className="values"
              value={selectedType}
              onChange={handleTypeChange}
            >
              <option value="">Select Material Type</option>
              <option value="Notes">Notes</option>
              <option value="Previous Year Papers">Previous Year Papers</option>
            </select>
          </label>

          <label>
            Department:
            <select
              className="values"
              value={selectedDepartment}
              onChange={handleDepartmentChange}
            >
              <option value="">Select Department</option>
              <option value="CS">CS</option>
              <option value="PHYSICS">PHYSICS</option>
              <option value="CHEMISTRY">CHEMISTRY</option>
              <option value="ZOOLOGY">ZOOLOGY</option>
              <option value="BOTANY">BOTANY</option>
              <option value="STATISTICS">STATISTICS</option>
              <option value="MATHS">MATHS</option>
              <option value="COMMERCE">COMMERCE</option>
              <option value="ENGLISH">ENGLISH</option>
            </select>
          </label>

          <label>
            Select the File:
            <input
              className="values"
              type="file"
              name="file"
              onChange={handleFileChange}
            />
          </label>

          <button type="button" id="study-mat-button" onClick={handleSubmit}>
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudyUpload;
