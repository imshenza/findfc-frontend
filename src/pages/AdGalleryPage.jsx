import React from 'react';
import UploadComponent from './UploadComponent';
import AdminHeader from '../components/AdminHeader';
import "./AdminHome.css"

const AdGalleryPage = () => {
  const galleryUploadLink = "/galleryupload";
  const galleryViewLink = "/galleryview";

  return (
    <div>
        <AdminHeader/>
      <h1 className='page-heading'>Gallery Page</h1><br /><br />
      <UploadComponent uploadLink={galleryUploadLink} viewLink={galleryViewLink} />
    </div>
  );
};

export default AdGalleryPage;
