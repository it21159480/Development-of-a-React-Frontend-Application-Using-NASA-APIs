import React, { useState, useEffect } from 'react';
import SpaceNavbar from './Navbar';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';



const MarsRoverPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [rover, setRover] = useState('curiosity');
  const [camera, setCamera] = useState('fhaz');
  const [sol, setSol] = useState(1000);  // Ensure this is a number for consistency
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const API_KEY = process.env.REACT_APP_NASA_API_KEY;

  const BASE_URL_MARS = 'https://api.nasa.gov/mars-photos/api/v1';
  const fetchMarsPhotos = async (rover, sol, camera) => {
    try {
      const url = `${BASE_URL_MARS}/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`;
      const response = await axios.get(url);
      return response.data.photos;
    } catch (error) {
      console.error('Failed to fetch Mars Rover Photos:', error);
      throw error;  // This allows the calling component to handle the error
    }
  };
  // Define fetchData outside useEffect so it can be called from onClick
  const fetchData = async () => {
    setLoading(true);
    try {
      const fetchedPhotos = await fetchMarsPhotos(rover, sol, camera);
      setPhotos(fetchedPhotos);
      setError('');
    } catch (error) {
      setError('Failed to fetch data. Please try again later.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [rover, camera, sol]);

  return (
    <div>
      <SpaceNavbar />
      <Container className="mt-5">
        <h1 className="mb-4 text-center">Mars Rover Photos</h1>
        <Row className="mb-3 align-items-end">
          <Col md={4}>
            <label htmlFor="roverSelect" className="form-label">Choose Rover:</label>
            <select id="roverSelect" className="form-select" value={rover} onChange={e => setRover(e.target.value)}>
              <option value="curiosity">Curiosity</option>
              <option value="opportunity">Opportunity</option>
              <option value="spirit">Spirit</option>
            </select>
          </Col>
          <Col md={4}>
            <label htmlFor="cameraSelect" className="form-label">Choose Camera:</label>
            <select id="cameraSelect" className="form-select" value={camera} onChange={e => setCamera(e.target.value)}>
              <option value="fhaz">Front Hazard Avoidance Camera</option>
              <option value="rhaz">Rear Hazard Avoidance Camera</option>
              <option value="mast">Mast Camera</option>
            </select>
          </Col>
          <Col md={4}>
            <label htmlFor="solInput" className="form-label">Enter Sol (Martian Day):</label>
            <input type="number" className="form-control" id="solInput" value={sol} onChange={e => setSol(e.target.value)} min="0" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={fetchData} className="w-100">Search</Button>
          </Col>
        </Row>
        <Row style={{marginTop:'50px'}}>
          {loading ? (
            <Col className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Col>
          ) : error ? (
            <Col className="text-center text-danger">{error}</Col>
          ) : photos.map((photo) => (
            <Col key={photo.id} lg={4} md={6} className="mb-3">
              <div className="card">
                <img src={photo.img_src} alt="Mars Rover" className="card-img-top img-fluid" />
                <div className="card-body">
                  <p className="card-text">Photo taken by {photo.rover.name} on {photo.earth_date}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MarsRoverPhotos;





// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
// import '../styles/MarsRoverImages.css'; // Make sure this path is correct


// function MarsRoverImages() {
//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [camera, setCamera] = useState('FHAZ'); // Default camera
//   const [sol, setSol] = useState(100);  // Default Sol to start with
//   const [searchAttempted, setSearchAttempted] = useState(false);  // To track if search has been attempted

//   const getRandomPhotos = (photos, numPhotos) => {
//     const shuffled = photos.sort(() => 0.5 - Math.random()); // Shuffle array
//     return shuffled.slice(0, numPhotos); // Get sub-array of first n elements after shuffled
//   };

//   const fetchMarsPhotos = async () => {
//     setLoading(true);
//     setSearchAttempted(true);  // Indicate that a search has been attempted
//     try {
//       const apiKey = 'X9zcVNSCdrV6hWt7i27KJSHpcRKhUAONOHwuGu77'; // Replace with your actual API key
//       const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&camera=${camera}&api_key=${apiKey}`;

//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       if (camera === 'MAST') {
//         setPhotos(getRandomPhotos(data.photos, 12)); // Only take 12 random photos for Mast Camera
//       } else {
//         setPhotos(data.photos);
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h1 className="mb-4 text-center">Mars Rover Images</h1>
//       <div className="row mb-3 align-items-end">
//         <div className="col-md-4">
//           <label htmlFor="solInput" className="form-label">Enter Sol (Martian Day):</label>
//           <input
//             type="number"
//             className="form-control"
//             id="solInput"
//             value={sol}
//             onChange={(e) => setSol(e.target.value)}
//             min="0"
//           />
//         </div>
//         <div className="col-md-4">
//           <label htmlFor="cameraSelect" className="form-label mt-2">Choose Camera:</label>
//           <select id="cameraSelect" className="form-select" value={camera} onChange={(e) => setCamera(e.target.value)}>
//             <option value="FHAZ">Front Hazard Avoidance Camera</option>
//             <option value="RHAZ">Rear Hazard Avoidance Camera</option>
//             <option value="MAST">Mast Camera</option>
//           </select>
//         </div>
//         <div className="col-md-4">
//           <button className="btn btn-primary w-100 mt-4" onClick={fetchMarsPhotos}>Search</button>
//         </div>
//       </div>
//       {searchAttempted && photos.length === 0 && !loading && (
//         <div className="text-center">No photos available for this camera on this sol.</div>
//       )}
//       <div className="row">
//         {photos.map((photo) => (
//           <div key={photo.id} className="col-lg-4 col-md-6 mb-4">
//             <div className="card">
//               <img src={photo.img_src} alt="Mars Rover" className="card-img-top img-fluid" />
//               <div className="card-body">
//                 <h5 className="card-title">{photo.camera.full_name}</h5>
//                 <p className="card-text">Photo taken by {photo.rover.name} on {photo.earth_date}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MarsRoverImages;