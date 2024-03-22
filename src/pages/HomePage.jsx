import React, { useState, useEffect } from "react";
import Poster from "../components/Poster";
import Header from "../components/Header";
import "./HomePage.css";

const HomePage = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/adminDash/");
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
      ? data.events.map((item) => (
          <Poster
            key={item.id}
            imageUrl={`http://localhost:8000${item.poster}`}
            time={item.time}
            venue={item.venue}
            date={item.date}
          />
        ))
      : null;

  return (
    <div className="home">
      <Header />
      <main>
        <div className="main-heading">
          <h1 id="events">TODAY'S EVENTS</h1>
        </div>
        <div className="posters-section">{dynamicPoster}</div>
      </main>
    </div>
  );
};

export default HomePage;
