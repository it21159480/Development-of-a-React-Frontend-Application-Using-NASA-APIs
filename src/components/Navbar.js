
import React, { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';  // Update the path if necessary

function SpaceNavbar() {
  const [navExpanded, setNavExpanded] = useState(false);

  const handleToggle = () => setNavExpanded(!navExpanded);

  return (
    <Navbar expand="lg" bg="dark" variant="dark" expanded={navExpanded} onToggle={handleToggle} className='gradient-navbar' style={{ }}>
        <Navbar.Brand href="#home">
          <Link to="/universe" className="d-flex align-items-center text-decoration-none">
            {/* <div className="bg-light rounded-circle" style={{ width: '30px', height: '30px', animation: 'orbit 20s infinite linear', marginRight: '20px' }}>
            </div> */}
            <span className="ms-2 text-white fw-bold" style={{ fontSize: '2rem',}}>Universe</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span>{navExpanded ? 'X' : '≡'}</span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center" style={{ fontSize: '1.15rem', fontWeight: '500px'}}>
            <Nav.Link as={Link} to="/universe" className="text-white px-3 hover-effect">Home</Nav.Link>
            <Nav.Link as={Link} to="/apod" className="text-white px-3 hover-effect">A-P-O-D</Nav.Link>
            <Nav.Link as={Link} to="/mars" className="text-white px-3 hover-effect">Mars Rover Images</Nav.Link>
            {/* <Nav.Link as={Link} to="/nasa" className="text-white px-3 hover-effect">Nasa Images</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default SpaceNavbar;


// import React, { useState } from 'react';
// import { Container, Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from '../component/Navbar.module.css';  // Ensure the path is correct

// function SpaceNavbar() {
//   const [navExpanded, setNavExpanded] = useState(false);

//   const handleToggle = () => setNavExpanded(!navExpanded);

//   return (
//     <Navbar expand="lg" bg="dark" variant="dark" expanded={navExpanded} onToggle={handleToggle}>
//       <Container>
//         <Navbar.Brand href="#home">
//           <Link to="/home" className={styles.logoContainer}>
//             <div className={styles.satellite}></div>
//             <span className={styles.brandText}>SpaceOne</span>
//           </Link>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav">
//           <span className={navExpanded ? styles.navbarTogglerOpen : styles.navbarToggler}>
//             {navExpanded ? '✖' : '≡'}
//           </span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link as={Link} to="/home" className={styles.navLink}>Home</Nav.Link>
//             <Nav.Link as={Link} to="/apod" className={styles.navLink}>Astronomy P-O-D</Nav.Link>
//             <Nav.Link as={Link} to="/mars" className={styles.navLink}>Mars Rover Images</Nav.Link>
//             <Nav.Link as={Link} to="/earth" className={styles.navLink}>Earth Images</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default SpaceNavbar;