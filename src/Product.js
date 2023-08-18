import React from 'react';
import Card from 'react-bootstrap/Card';

const Product = (props) => {
    const { id, title, price, description, category, image, rating } = props;
    return (
        <Card >
            {/* <h1>id: {id}</h1> */}
            <h5>title: {title}</h5>
            <p>price: {price}</p>
            <p>description: {description}</p>
            <p>category: {category}</p>
            <Card.Img src={image} alt='image' />
        </Card>

    )
};

export default Product;




