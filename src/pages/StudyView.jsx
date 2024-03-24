import React, { useState, useEffect } from 'react';
import AdminHeader from '../components/AdminHeader';
import axios from 'axios';

const StudyView = () => {
  const [studyMaterials, setStudyMaterials] = useState([]);

  // Function to fetch all uploaded study materials
  const fetchStudyMaterials = async () => {
    try {
      const response = await axios.get('http://localhost:8000/fetch_all_study_materials');
      if (response.status === 200) {
        setStudyMaterials(response.data);
      }
    } catch (error) {
      console.error('Error fetching study materials:', error);
    }
  };

  // Function to handle deletion of a study material
  const handleDelete = async (materialId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/delete_study_material/${materialId}`);
      if (response.status === 200) {
        setStudyMaterials((prevMaterials) => prevMaterials.filter((material) => material.id !== materialId));
        console.log('Study material deleted successfully');
      }
    } catch (error) {
      console.error('Error deleting study material:', error);
    }
  };

  useEffect(() => {
    fetchStudyMaterials();
  }, []);

  return (
    <div>
      <AdminHeader />
      <div className="study-view-container">
        <h2>Uploaded Study Materials</h2>
        {studyMaterials.length > 0 ? (
          <div className="study-materials-list">
            {studyMaterials.map((material) => (
              <div key={material.id} className="study-material-item">
                <div className="study-material-details">
                  <p><strong>Category:</strong> {material.category}</p>
                  <p><strong>Year:</strong> {material.year}</p>
                  <p><strong>Type:</strong> {material.type}</p>
                  <p><strong>Department:</strong> {material.department}</p>
                  <p><strong>File Name:</strong> {material.fileName}</p>
                  <p><strong>Uploaded At:</strong> {material.uploadedAt}</p>
                </div>
                <div className="study-material-actions">
                  <a href={material.fileUrl} target="_blank" rel="noopener noreferrer">
                    View File
                  </a>
                  <button onClick={() => handleDelete(material.id)}>Delete File</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No study materials uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default StudyView;
