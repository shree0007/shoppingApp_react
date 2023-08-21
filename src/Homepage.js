import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import image from './homepage.jpg';
import Button from 'react-bootstrap/Button';


const Homepage = () => {
    return (
        <div>
            <NavBar />
            <div style={{ height: '100vh', backgroundImage: `url(${image}`, backgroundPosition: 'center center', backgroundSize: 'cover center', backgroundRepeat: 'no-repeat', padding: '3rem' }}>
                <h1 style={{ color: 'brown' }}>Welcome to SHreeShopHub</h1>
                <p>- Empowering Your Shopping Experience.</p>

                <Link to={'/products'}><Button variant='primary'>Browse all products</Button></Link>
            </div>


        </div>
    );
};

export default Homepage;