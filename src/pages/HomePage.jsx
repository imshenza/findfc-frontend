// src/pages/HomePage.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Poster from "../components/Poster";
import "./HomePage.css";
import Header from "../components/Header";

const HomePage = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
        // Handle the data as needed...
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const dynamicPoster =
    data && data.events
      ? data.events.map((item) => {
          return (
            <Poster
              key={item.id}
              imageUrl={`http://localhost:8000${item.poster}`}
              time={item.time}
              venue={item.venue}
            />
          );
        })
      : null;

  const options = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Study Materials", link: "/study-materials" },
    { id: 3, label: "Gallery", link: "/gallery" },
    { id: 4, label: "Maps", link: "/maps" }, // Add your maps link or route
  ];

  return (
    <div className="home">
      <Header />
      {/* Posters */}
      <main>
        <div className="main-heading">
          <h1 id="events">TODAY'S EVENTS</h1>
        </div>
        <div className="posters-section">
          {/* Display posters here */}
          {dynamicPoster}
          {/* <Poster
            imageUrl={"/images/img3.png"}
            time="10:00 AM"
            venue="Venue 1"
          />
          <Poster
            imageUrl={"/images/img3.png"}
            time="02:00 PM"
            venue="Venue 2"
          />
          <Poster
            imageUrl={"/images/img3.png"}
            time="02:00 PM"
            venue="Venue 3"
          /> */}
          {/* Add more posters as needed */}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
