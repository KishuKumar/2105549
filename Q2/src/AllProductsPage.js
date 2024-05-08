import React from 'react';
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Data = [
  {
    "productName": "Laptop 1",
    "price": 2236,
    "rating": 4.7,
    "discount": 63,
    "availability": "yes"
  },
  {
    "productName": "Laptop 13",
    "price": 1244,
    "rating": 4.5,
    "discount": 45,
    "availability": "out-of-stock"
  },
  {
    "productName": "Laptop 3",
    "price": 9102,
    "rating": 4.44,
    "discount": 98,
    "availability": "out-of-stock"
  },
  {
    "productName": "Laptop 11",
    "price": 2652,
    "rating": 4.12,
    "discount": 70,
    "availability": "yes"
  },
  {
    "productName": "Laptop 4",
    "price": 1258,
    "rating": 3.8,
    "discount": 33,
    "availability": "No"
  }
];
const handleRoute = (index) => {
  <Link to={`/product/${index}`}></Link>
}

const AllProductsPage = () => {
  return (
    <div>
      <h1>All Products</h1>
      <div className="product-list">
        {Data.map((product, index) => (
          <div key={index} className="product-card" onClick={handleRoute(index)}>
            <h2>{product.productName}</h2>
            <p>Price: {product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}</p>
            <p>Availability: {product.availability}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
