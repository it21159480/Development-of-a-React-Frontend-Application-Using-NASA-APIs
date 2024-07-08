import logo from './logo.svg';
import './App.css';
import AstronomyPicture from './components/AstronomyPicture';
import MarsRoverPhotos from './components/MarsRoverPhotos'
import 'bootstrap/dist/css/bootstrap.min.css';
import SpaceNavbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/universe' element={<MenuPage/>} />
          <Route path='/apod' element={<AstronomyPicture/>} />
          <Route path='/mars' element={<MarsRoverPhotos/>} />
        </Routes>
      </Router>
      {/* <SpaceNavbar /> */}
      
      {/* <AstronomyPicture /> */}
      {/* <MarsRoverPhotos /> */}
    </div>
  );
}

export default App;
