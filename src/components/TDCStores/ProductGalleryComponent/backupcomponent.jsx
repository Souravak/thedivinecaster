import React from 'react';
import './ImageGalleryComponent.css';

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = {
      src: r(item),
      details: getProductDetails(index + 1),
    };
  });
  return images;
};


const getProductDetails = (index) => {
  if (index >= 0 && index < productDetails.length) {
    const { name, oldPrice, newPrice, myLink } = productDetails[index];
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