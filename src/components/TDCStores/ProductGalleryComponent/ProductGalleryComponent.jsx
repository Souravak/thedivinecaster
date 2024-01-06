// ImageGalleryComponent.js
import React from 'react';
import './ProductGalleryComponent.css';
import productDetails from '../ProductDetails/ProductDetails';

const ProductGalleryComponent = () => {
  return (
      <div className="image-container">
        {productDetails.map((product, index) => (
          <div key={index} className="image-card">
            <img src={product.img} alt={`Image ${index + 1}`} className="galleryItem" />
            <div className="details">
              <span className="productName">{product.name}</span>
              <div className="priceDetails">
                <span className="newPrice">₹{product.newPrice}</span>
                <span>MRP: <span className="oldPrice">₹{product.oldPrice}</span></span>
              </div>
              <button onClick={() => window.open(product.myLink, '_blank')}>View</button>
            </div>
          </div>
        ))}
      </div>
  );
};

export default ProductGalleryComponent;