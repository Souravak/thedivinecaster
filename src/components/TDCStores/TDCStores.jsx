import React from 'react';
import './TDCStores.css';
import ProductGalleryComponent from './ProductGalleryComponent/ProductGalleryComponent';
import Footer from '../Footer/Footer';


const TDCStores = () => {
  return (
    <div className="tdcstores">
      <div className="title">My Store</div>
      <div className="productContainer">
        <div className="productItem">
          <ProductGalleryComponent />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TDCStores