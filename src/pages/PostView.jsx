import React from 'react'
import AdminHeader from '../components/AdminHeader'
import PosterVw from '../components/PosterVw'

const PostView = () => {
  // const [showOptions, setShowOptions] = useState(false);
  // const [data, setData] = useState("");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://127.0.0.1:8000/");
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setData(data);
  //       // Handle the data as needed...
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // const handleToggleOptions = () => {
  //   setShowOptions(!showOptions);
  // };

  // const dynamicPosterview =
  //   data && data.events
  //     ? data.events.map((item) => {
  //         return (
  //           <Poster
  //             key={item.id}
  //             imageUrl={`http://localhost:8000${item.poster}`}
  //             time={item.time}
  //             venue={item.venue}
  //           />
  //         );
  //       })
  //     : null;
  return (
    <div>
      <AdminHeader/>
     <div className="posters-section">
     {/* {dynamicPosterview} */}
     <PosterVw
            imageUrl={"/images/img3.png"}
            time="02:00 PM"
            venue="Venue 2"
          />
     </div>
      </div>
  )
}

export default PostView