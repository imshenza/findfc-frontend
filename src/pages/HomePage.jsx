import React, { useState, useEffect } from "react";
import Poster from "../components/Poster";
import Header from "../components/Header";
import "./HomePage.css";

const HomePage = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/adminDash/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setEvents(data.events); // Store events data in state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="home">
      <Header />
      <main>
        <div className="main-heading">
          <h1 id="events">TODAY'S EVENTS</h1>
        </div>
        <div className="posters-section">
          {events.map((event) => (
            <Poster
              key={event.id}
              title={event.title} // Ensure that title is passed correctly
              imageUrl={`http://localhost:8000${event.poster}`}
              time={event.time}
              venue={event.venue}
              date={event.date}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
