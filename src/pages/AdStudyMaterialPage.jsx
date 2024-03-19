import React from 'react';
import UploadComponent from './UploadComponent';
import AdminHeader from '../components/AdminHeader';
import "./AdminHome.css"

const AdStudyMaterialPage = () => {
  const studyUploadLink = "/studyupload";
  const studyViewLink = "/studyview";

  return (
    <div>
        <AdminHeader/>
      <h1 className='page-heading'>Study Material Page</h1><br /><br />
      <UploadComponent uploadLink={studyUploadLink} viewLink={studyViewLink} />
    </div>
  );
};

export default AdStudyMaterialPage;
