import React from 'react';
import Card from 'react-bootstrap/Card';

const Product = (props) => {
    const { id, title, price, description, category, image, rating } = props;
    return (
        <Card className='card' style={{ width: '38rem', padding: '2.5rem', background: 'linear-gradient(to bottom, rgba(106,17,203,0.5), rgba(37,117,252,0.5))' }}>
            {/* <h1>id: {id}</h1> */}
            <div className='image' style={{ height: '450px', marginBottom: '2rem' }}>
                <Card.Img style={{ height: '100%', marginBottom: '1rem', borderRadius: '8px' }}
                    src={image} alt='image' />
            </div>
            <div style={{ backgroundColor: 'white', height: '100%', padding: '1rem', borderRadius: '8px' }}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>Price: {price} €</Card.Text>
                <Card.Text>Description: {description}</Card.Text>
                <Card.Text>Category: {category}</Card.Text>
            </div>
        </Card>

    )
};

export default Product;




