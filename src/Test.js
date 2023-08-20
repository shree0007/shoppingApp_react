import React from 'react';
import NavBar from './NavBar';
import Button from 'react-bootstrap/Button';




const Test = () => {
    return (
        <div >
            <NavBar />

            <h5 style={{ textAlign: 'center', marginTop: '2rem' }}>Test Page</h5>
            <div style={{ width: '5.8%', margin: 'auto' }}>
                <Button variant='primary' style={{ margin: 'auto', marginTop: '10rem' }}>Test Button</Button>
            </div>

        </div>
    );
};

export default Test;