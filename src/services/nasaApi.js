import axios from 'axios';

const API_KEY = process.env.REACT_APP_NASA_API_KEY;
const BASE_URL = 'https://api.nasa.gov/planetary';
const BASE_URL_MARS = 'https://api.nasa.gov/mars-photos/api/v1';
export const fetchAPOD = async (date) => {
    const url = date ? `${BASE_URL}/apod?api_key=${API_KEY}&date=${date}` : `${BASE_URL}/apod?api_key=${API_KEY}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch APOD:', error);
      throw error;
    }
  };
  
  export const fetchMarsPhotos = async (rover, sol, camera) => {
    try {
      const url = `${BASE_URL_MARS}/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`;
      const response = await axios.get(url);
      return response.data.photos;
    } catch (error) {
      console.error('Failed to fetch Mars Rover Photos:', error);
      throw error;  // This allows the calling component to handle the error
    }
  };