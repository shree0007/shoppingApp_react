import Product from './Product';
import axios from 'axios';
const api = 'https://fakestoreapi.com/products';
const { data: products } = await axios.get(api)

console.log(products)

const ProductsList = () => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
            {products.map((product) => (
                <Product key={product?.id}{...product}

                />
            ))}

        </div>

    )
};

export default ProductsList;