import Product from './Product';
import axios from 'axios';
const api = 'https://fakestoreapi.com/products';
const { data: products } = await axios.get(api)

console.log(products)

const ProductsList = () => {
    return (
        <div className='d-flex flex-row width:200px justify-content-center'>
            {products.map((product) => (
                <Product key={product?.id}{...product}

                />
            ))}

        </div>

    )
};

export default ProductsList;