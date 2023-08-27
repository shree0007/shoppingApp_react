import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import image from './homepage.jpg';
import Button from 'react-bootstrap/Button';


const Homepage = () => {
    return (
        <div style={{ backgroundImage: `url(${image}` }}>
            <NavBar />
            <div style={{ height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', padding: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '600px' }}>
                    <h1 style={{ color: 'brown', fontWeight: '900', background: 'linear-gradient(to right, rgba(72,198,239,0.5), rgba(111,134,214,0.5))', width: '520px' }}>Welcome to ShreeShopHub</h1>
                    <h5 style={{ color: 'white', marginBottom: '2rem' }}>- Empowering Your Shopping Experience.</h5>

                    <Link to={'/products'}><Button variant='primary'>Browse all products</Button></Link>
                </div>
            </div>


        </div>
    );
};

export default Homepage;