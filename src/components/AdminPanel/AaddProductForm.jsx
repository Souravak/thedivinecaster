// AddProductForm.jsx
import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const AaddProductForm = ({ onProductAdded }) => {
  
  

  return (
    <div className="add-product-form">
      <h3>Add Product</h3>
      <input type="file" accept="image/*" onChange={handleProductImageChange} />
      {imageUrl && <img src={imageUrl} alt="preview" style={{ maxWidth: '200px' }} />}
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Old Price" value={oldPrice} onChange={(e) => setOldPrice(e.target.value)} />
      <input type="text" placeholder="New Price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
      <input type="text" placeholder="Purchase Link" value={purchaseLink} onChange={(e) => setPurchaseLink(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AaddProductForm;
