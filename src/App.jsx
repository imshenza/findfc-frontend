import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StudyMaterialsPage from "./pages/StudyMaterialsPage";
import GalleryPage from "./pages/GalleryPage";
import LoginPage from "./pages/LoginPage";

import MapPage from "./pages/MapPage";
import TestPage from "./pages/TestPage";
import AdminHome from "./pages/AdminHome";

import AdGalleryPage from "./pages/AdGalleryPage";
import AdPosterPage from "./pages/AdPosterPage";
import AdStudyMaterialPage from "./pages/AdStudyMaterialPage";
import PostUpload from "./pages/PostUpload";
import PostView from "./pages/PostView";
import GallUpload from "./pages/GallUpload";
import GallView from "./pages/GallView";
import StudyUpload from "./pages/StudyUpload";
import StudyView from "./pages/StudyView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/study-materials" element={<StudyMaterialsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="login/admin/:id" element={<AdminHome />} />
        <Route path="/posterup" element={<AdPosterPage />} />
        <Route path="/studyup" element={<AdStudyMaterialPage />} />
        <Route path="/galleryup" element={<AdGalleryPage />} />
        <Route path="/posterupload" element={<PostUpload />} />
        <Route path="/posterview" element={<PostView />} />
        <Route path="/galleryupload" element={<GallUpload />} />
        <Route path="/galleryview" element={<GallView />} />
        <Route path="/studyupload" element={<StudyUpload />} />
        <Route path="/studyview" element={<StudyView />} />
        {/* <Route path="/posterupload" element={<PosterUpPage />} /> */}
        {/* Add more routes for additional pages if needed */}
      </Routes>
    </Router>
  );
}

export default App;
