import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          {/* Display product information */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
