import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import SpaceNavbar from './Navbar';


const AstronomyPicture = () => {
  const [apod, setApod] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const BASE_URL = 'https://api.nasa.gov/planetary';
  const API_KEY = process.env.REACT_APP_NASA_API_KEY;

  const fetchAPOD = async (date) => {
    const url = date ? `${BASE_URL}/apod?api_key=${API_KEY}&date=${date}` : `${BASE_URL}/apod?api_key=${API_KEY}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch APOD:', error);
      throw error;
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchAPOD(date);
        setApod(data);
        setError('');
      } catch (error) {
        setError('Failed to fetch data. Please try again later.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (date) {
      fetchData();
    }
  }, [date]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);



  const shareApod = () => {
    const shareUrl = `https://twitter.com/intent/tweet?text=Check out this amazing space picture from NASA's APOD: ${apod.url}`;
    window.open(shareUrl, '_blank');
  };

  const shareOnWhatsApp = () => {
    const message = `Check out this amazing space picture from NASA's APOD: ${apod.title} - ${apod.url}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <SpaceNavbar />
      <div className="apod-container" style={{ backgroundImage: `url(${apod?.url})` }}>
        <div className="blur-overlay"></div>
        <div className="container">
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          {loading && (
            <div className="text-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
          {error && <div>{error}</div>}
          {apod && (
            <div>
              <h1>{apod.title}</h1>
              <div >
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                  <img src={apod.url} alt={apod.title} className="apod-image" height={300} />
                  <p>{apod.explanation}</p>
                </div>


                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                  <Button variant="info" onClick={() => shareApod()}>Share on Twitter  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg></Button>
                  <Button variant="success" onClick={() =>  shareOnWhatsApp()}>Share on WhatsApp   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg></Button>
                </div>

              </div>

            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default AstronomyPicture;

