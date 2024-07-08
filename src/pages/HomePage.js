import React from 'react';
import './HomePage.css'; // Import the CSS file

function HomePage() {
  return (
    <div className="home-page">
      <video className="background-video" autoPlay loop muted>
        <source src="your-video-file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to HomePage</h1>
        <p>Your content goes here.</p>
      </div>
    </div>
  );
}

export default HomePage;
