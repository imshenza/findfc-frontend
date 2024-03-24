// import React from 'react'
// import AdminHeader from '../components/AdminHeader'
// import PosterVw from '../components/PosterVw'

// const PostView = () => {
//   // const [showOptions, setShowOptions] = useState(false);
//   // const [data, setData] = useState("");
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const response = await fetch("http://127.0.0.1:8000/");
//   //       if (!response.ok) {
//   //         throw new Error(`HTTP error! status: ${response.status}`);
//   //       }
//   //       const data = await response.json();
//   //       setData(data);
//   //       // Handle the data as needed...
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // }, []);

//   // const handleToggleOptions = () => {
//   //   setShowOptions(!showOptions);
//   // };

//   // const dynamicPosterview =
//   //   data && data.events
//   //     ? data.events.map((item) => {
//   //         return (
//   //           <Poster
//   //             key={item.id}
//   //             imageUrl={`http://localhost:8000${item.poster}`}
//   //             time={item.time}
//   //             venue={item.venue}
//   //           />
//   //         );
//   //       })
//   //     : null;
//   return (
//     <div>
//       <AdminHeader/>
//      <div className="posters-section">
//      {/* {dynamicPosterview} */}
//      <PosterVw
//             imageUrl={"/images/img3.png"}
//             time="02:00 PM"
//             venue="Venue 2"
//           />
//      </div>
//       </div>
//   )
// }

// export default PostView
import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminHeader from "../components/AdminHeader";
import Poster from "../components/Poster";
import "./PostView.css";

const PostView = () => {
  const [posters, setPosters] = useState([]);

  useEffect(() => {
    fetchPosters();
  }, []);

  const fetchPosters = async () => {
    try {
      const response = await axios.get("http://localhost:8000/adminDash/posters");
      setPosters(response.data);
    } catch (error) {
      console.error("Error fetching posters:", error);
    }
  };

  const handleEdit = (id) => {
    // Handle edit logic
    console.log("Editing poster with ID:", id);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/adminDash/delete_poster/${id}`);
      if (response.status === 200) {
        setPosters((prevPosters) => prevPosters.filter((poster) => poster.id !== id));
        console.log('Poster deleted successfully');
      }
    } catch (error) {
      console.error("Error deleting poster:", error);
    }
  };

  return (
    <div>
      <AdminHeader />
      <div className="posters-container">
        <h2>Uploaded Posters</h2>
        {posters.length > 0 ? (
          <div className="posters-list">
            {posters.map((poster) => (
              <div key={poster.id} className="poster-item">
                <Poster
                  title={poster.title}
                  imageUrl={`http://localhost:8000${poster.imageUrl}`}
                  time={poster.time}
                  venue={poster.venue}
                />
                <div className="poster-item-actions">
                  <button onClick={() => handleEdit(poster.id)} className="edit-btn">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(poster.id)} className="delete-btn">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No posters uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default PostView;
