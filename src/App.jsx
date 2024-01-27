
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StudyMaterialsPage from './pages/StudyMaterialsPage';
import GalleryPage from './pages/GalleryPage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import MapPage from './pages/MapPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/study-materials" element={<StudyMaterialsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/map' element={<MapPage/>}/>
        {/* Add more routes for additional pages if needed */}
      </Routes>
    </Router>
  );
}

export default App;

