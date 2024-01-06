// ImageGalleryComponent.js
import React from 'react';
import './ImageGalleryComponent.css';

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = {
      src: r(item),
      details: getProductDetails(index + 1), // Assuming getProductDetails retrieves details based on index
    };
  });
  return images;
};

const productDetails = [
  { name: 'Product 1', oldPrice: '1,499', newPrice: '999', myLink: 'https://www.google.com', img:'../../assets/Gallery/1.jpg'}
  // { name: 'Product 2', oldPrice: '1,499', newPrice: '999'},
  // { name: 'Product 3', oldPrice: '1,499', newPrice: '999'},
  // { name: 'Product 4', oldPrice: '1,499', newPrice: '999'},
  // { name: 'Product 5', oldPrice: '1,499', newPrice: '999'},
  // { name: 'Product 6', oldPrice: '1,499', newPrice: '999'}
  // Add details for each image in the same order as your images
];

const getProductDetails = (index) => {
  if (index >= 0 && index < productDetails.length) {
    const { name, oldPrice, newPrice, myLink } = productDetails[index];
    // const link = myLink.toString();
    return (
      <div className="details">
        <span className="productName">{name}</span>
        <div className="priceDetails">
          <span className="newPrice">${newPrice}</span>
          <span>MRP: <span className="oldPrice">${oldPrice}</span></span>
        </div>
        <button onClick={() => { window.location.href = {myLink};}}>View</button>
      </div>
    );
  }
  return null;
};

const images = importAll(require.context('../../assets/Gallery', false, /\.(jpg)$/));

const ImageGalleryComponent = () => {
  return (
    <div>
      <div className="image-container">
        {Object.keys(images).map((imageName, index) => (
          <div key={index} className="image-card">
            <img src={images[imageName].src} alt={`Image ${index + 1}`} className="galleryItem" />
            <p>{images[imageName].details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGalleryComponent;