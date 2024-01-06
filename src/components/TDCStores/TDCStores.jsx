import React from 'react';
import './TDCStores.css';
import ProductGalleryComponent from './ProductGalleryComponent/ProductGalleryComponent';


const TDCStores = () => {
  return (
    <div className="tdcstores">
      <div className="title">My Store</div>
      <div className="productContainer">
        <div className="productItem">
          <ProductGalleryComponent />
        </div>
      </div>
    </div>
  )
}

export default TDCStores