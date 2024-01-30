import { useState, useEffect } from "react";
const TestPage = () => {
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

  console.log(data);
  return (
    <div>
      TestPage
      <p>{data.events[0].venue}</p>
      <p>{data.events[0].time}</p>
      {/* <button
        onClick={() => {
          setData("Testing");
        }}
      >
        click
      </button> */}
    </div>
  );
};

export default TestPage;
