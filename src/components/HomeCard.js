import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import space from '../images/apod.jpg';
import rover from '../images/rover.jpg';


function HomeCard() {
    return (
        <Container fluid className="mt-4">
            <Row className="justify-content-center px-5 mt-5">
                <Col lg={4} md={6} sm={12} className="mb-4">
                    <Card className="h-100 custom-card">
                        <Link to="/apod" style={{ textDecoration: 'none', color: 'black' }}>
                            <div className="image-overlay">
                                <Card.Img variant="top" src={space} alt="APOD" style={{ height: '350px', objectFit: 'fill' }} />
                                <div className="overlay-text">
                                    <h5 className="text-bold">Astronomy Picture of the Day</h5>
                                    <p>
                                        Astronomy Picture of the Day is a unique educational feature hosted by NASA and Michigan Technological University. Each day, it showcases a different image or photograph of our universe, accompanied by a brief explanation written by a professional astronomer. These daily features are designed to highlight various celestial phenomena including galaxies, nebulae, stars, planets, and other astronomical and cosmological wonders. APOD serves both educational and inspirational purposes, aiming to increase the public's awareness of and appreciation for the beauty of the cosmos. Launched on June 16, 1995, APOD has built a large archive, accessible to the public, containing thousands of high-quality images that illustrate the vastness and diversity of the universe.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </Card>
                </Col>

                <Col lg={4} md={6} sm={12} className="mb-4">
                    <Card className="h-100 custom-card">
                        <Link to="/mars" style={{ textDecoration: 'none', color: 'black' }}>
                            <div className="image-overlay">
                                <Card.Img variant="top" src={rover} alt="Mars Rover" style={{ height: '350px', objectFit: 'fill' }} />
                                <div className="overlay-text">
                                    <h5 className="text-bold">Mars Rover Images</h5>
                                    <p>
                                        What is a Mars Rover?
                                        A Mars rover is a motorized vehicle that travels across the surface of the planet Mars upon landing. Rovers have several scientific instruments onboard, including cameras, which they use to send data back to Earth. Some of the most famous Mars rovers include Spirit, Opportunity, and Curiosity. These rovers are part of NASA's Mars Exploration Program and have the primary objective of studying Mars' terrain, climate, geology, and the potential for life.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </Card>
                </Col>

            </Row>
        </Container>
    );
}

export default HomeCard;
