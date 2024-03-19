// import React from 'react';
// import './UploadComponent.css';
// import AdminHeader from '../components/AdminHeader';
// import { Link } from 'react-router-dom';

// const UploadComponent = () => {
//   return (
//     <div>
//       <AdminHeader />
//       <div className="button-container">
//         <Link to="/posterupload">
//         <button className="button">Upload New</button></Link>
//         <button className="button">View Uploaded</button>
//       </div>
//     </div>
//   );
// };

// export default UploadComponent;
import React from 'react';
import './UploadComponent.css';
import ButtonLink from '../components/ButtonLink'; // Import the ButtonLink component


const UploadComponent = ({ uploadLink, viewLink }) => {
  return (
    <div className="all">

<div className="button-container">
      <ButtonLink to={uploadLink} text="Upload New" />
      <ButtonLink to={viewLink} text="View Uploaded" />
    </div>
    </div>
    
  );
};

export default UploadComponent;
