import React from 'react';
import UploadComponent from './UploadComponent';
import AdminHeader from '../components/AdminHeader';
import "./AdPoster.css"

const AdPosterPage = () => {
  const posterUploadLink = "/posterupload";
  const posterViewLink = "/posterview";

  return (
    <div>
        <AdminHeader/>
      <h1 className='page-heading'>Poster Page</h1>
      <UploadComponent uploadLink={posterUploadLink} viewLink={posterViewLink} />
    </div>
  );
};

export default AdPosterPage;
