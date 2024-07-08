import React from 'react'
import '../styles/heade.css';
function Header() {
    return (
        <div>
            <header class="header">
                <div class="header-content">
                    <h1>E-Commerce Website</h1>
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Products</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}



export default Header

