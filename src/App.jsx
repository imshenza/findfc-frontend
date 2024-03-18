import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StudyMaterialsPage from "./pages/StudyMaterialsPage";
import GalleryPage from "./pages/GalleryPage";
import LoginPage from "./pages/LoginPage";
// import Header from "./components/Header";
import MapPage from "./pages/MapPage";
import TestPage from "./pages/TestPage";
import AdminHome from "./pages/AdminHome";
import UploadComponent from "./pages/UploadComponent";
import Header from "./components/Header";
// import PosterUpPage from "./pages/PosterUpPage";
import UploadComponentstudy from "./pages/UploadComponentstudy";
import UploadComponentgall from "./pages/UploadComponentgall";
import PostUpload from "./pages/PostUpload";
// import Navbar from "./components/Navbar";

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
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/posterup" element={<UploadComponent />} />
        <Route path="/studyup" element={<UploadComponentstudy />} />
        <Route path="/galleryup" element={<UploadComponentgall />} />
        <Route path="/posterupload" element={<PostUpload />} />
        {/* <Route path="/posterupload" element={<PosterUpPage />} /> */}
        {/* Add more routes for additional pages if needed */}
      </Routes>
    </Router>
  );
}

export default App;
