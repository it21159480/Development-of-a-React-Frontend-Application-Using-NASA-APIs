import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; // Import the CSS file

function HomePage() {

  const navigate = useNavigate(); // Create the navigate function

  const handleRedirect = () => {
    navigate('/universe'); // Specify the path you want to redirect to
  };
  return (
    <div className="home-page">
      <video className="background-video" autoPlay loop muted>
        <source src="/assets/bgvedio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to Universe</h1>
        <p>Your content goes here.</p>
        <button onClick={handleRedirect} className="redirect-button">Explor the Universe</button> 
      </div>
    </div>
  );
}

export default HomePage;
