import React, { useState } from 'react';
import './AdminPanel.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from '../../FirebaseConfig/FirebaseConfig';

firebase.initializeApp(firebaseConfig);

const AdminPanel = () => {
  const [controller, setController] = useState(JSON.parse(sessionStorage.getItem('controllerData')));
  const [socialMediaData, setSocialMediaData] = useState(JSON.parse(sessionStorage.getItem('socialMediaData')));
  const [videoLink, setVideoLink] = useState('');
  const [videoCategory, setVideoCategory] = useState('default');
  
  
  
  const [name, setName] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [purchaseLink, setPurchaseLink] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  
  const trendingControllerData = JSON.parse(sessionStorage.getItem('trendingControllerData'));

  const [tdcCheckBox, setTdcCheckBox] = useState(trendingControllerData.tdc);
  const [dgCheckBox, setDgCheckBox] = useState(trendingControllerData.dg);
  const [srvtvCheckBox, setSrvtvCheckBox] = useState(trendingControllerData.srvtv);
  const [dmhCheckBox, setDmhCheckBox] = useState(trendingControllerData.dmh);
  const [dpcsCheckBox, setDpcsCheckBox] = useState(trendingControllerData.dpcs);
  const [dchCheckBox, setDchCheckBox] = useState(trendingControllerData.dch);
  

  
  const handleProductImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImageUrl(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleProductSave = async () => {
    if (!name || !oldPrice || !newPrice || !purchaseLink || !image) {
      alert('Please fill in all fields and select an image.');
      return;
    }
  
    try {
      const filename = image.name;
      
      const storageRef = firebase.storage().ref(`Gallery/${filename}`);
      const uploadTaskSnapshot = await storageRef.put(image);
      await uploadTaskSnapshot.ref.getDownloadURL();

      const db = firebase.firestore();
      await db.collection('products').doc(filename).set({
        name: name,
        oldPrice: oldPrice,
        newPrice: newPrice,
        myLink: purchaseLink,
        img: filename,
      });

      // const db = firebase.firestore();
      // await db.collection('products').doc(filename).set({
      //   name: name,
      //   oldPrice: oldPrice,
      //   newPrice: newPrice,
      //   myLink: purchaseLink,
      //   img: filename,
      // });
  
      setName('');
      setOldPrice('');
      setNewPrice('');
      setPurchaseLink('');
      setImage(null);
      setImageUrl('');
  
      // alert('Product added successfully!');
      console.log('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('An error occurred while adding the product. Please try again.');
    }
  };

  const clearForm = () => {
    setName('');
    setOldPrice('');
    setNewPrice('');
    setPurchaseLink('');
    setImage(null);
    setImageUrl('');
  };
  
  const handleClearProduct = () => {
    clearForm();
    alert('Form cleared successfully!');
  };
  

  
  // Handle Update firestore 
  const updateFirestoreData = async (collection, doc, data) => {
    const db = firebase.firestore();
    const dataRef = db.collection(collection).doc(doc);
    try {
      await dataRef.update(data);
    } catch (error) {
      // console.error('Error updating data:', error);
      alert(`Error updating ${doc} data: ${error}`);
    }
  };

  
  // Handle data update
  const handleDataUpdate = async (platform, data, showAlert = true) => {
    // console.log(`Calling updateFirestoreData for ${platform}`);
    updateFirestoreData('data', platform.toLowerCase(), data);
    setSocialMediaData({ ...socialMediaData, [platform]: data });
    showAlert && alert(`${platform} data updated successfully!`);
  };

  // Handle data reset
  const handleDataReset = (platform, data, showAlert = true) => {
    setSocialMediaData({ ...socialMediaData, [platform]: data });
    showAlert && alert(`${platform} data reset successfully!`);
  };

  // Handle update all
  const handleUpdateAll = async () => {
    // console.log('Updating all social media platforms');
    for (const [platform, data] of Object.entries(socialMediaData)) {
      await handleDataUpdate(platform, data, false);
    }
    alert('All data updated successfully!');
  };

  // Handle reset all
  const handleResetAll = () => {
    // console.log('Resetting all social media platforms');
    for (const [platform, data] of Object.entries(socialMediaData)) {
      handleDataReset(platform, data, false);
    }
    alert('All data reset successfully!');
  };

  // Handle input change
  const handleInputChange = (platform, key, value) => {
    const newData = { ...socialMediaData[platform], [key]: value };
    setSocialMediaData({ ...socialMediaData, [platform]: newData });
  };

  const handleAddVideoLink = (linkToAdd) => {
    if(!linkToAdd) {
      alert('Please enter a valid video link!');
      return;
    }
    else{
      var videoCount = parseInt(sessionStorage.getItem('videoCount'));
      videoCount++;
      
      console.log(`Adding ${linkToAdd} to ${videoCount} field`);

      try {
        const db = firebase.firestore();

        const TDCVideoLinkRef = db.collection('videolink').doc('tdclink');
        const DGVideoLinkRef = db.collection('videolink').doc('dglink');
        const SRVTVVideoLinkRef = db.collection('videolink').doc('srvtvlink');
        const CHVideoLinkRef = db.collection('videolink').doc('chlink');
        const DMHVideoLinkRef = db.collection('videolink').doc('dmhlink');
        const DPCSVideoLinkRef = db.collection('videolink').doc('dpcslink');

        const videoCountRef = db.collection('videolink').doc('count');

        videoCountRef.set({ count: videoCount });
        if(videoCategory === 'TDC') {
          TDCVideoLinkRef.update({ [videoCount]: linkToAdd });
        }
        else if(videoCategory === 'DG'){
          DGVideoLinkRef.update({ [videoCount]: linkToAdd });
        }
        else if(videoCategory === 'SRVTV'){
          SRVTVVideoLinkRef.update({ [videoCount]: linkToAdd });
        }
        else if(videoCategory === 'CH'){
          CHVideoLinkRef.update({ [videoCount]: linkToAdd });
        }
        else if(videoCategory === 'DMH'){
          DMHVideoLinkRef.update({ [videoCount]: linkToAdd });
        }
        else if(videoCategory === 'DPCS'){
          DPCSVideoLinkRef.update({ [videoCount]: linkToAdd });
        }
        else{
          alert('Invalid category!');
          return;
        }

        sessionStorage.setItem('videoCount', videoCount);
        console.log('Video link added successfully!');
        handleClearVideoLink();
      } catch (error) {
        console.error('Error adding video link:', error);
      }

      setVideoLink('');
      return;
    }
  };

  const handleClearVideoLink = () => {
    setVideoLink('');
    // setVideoCategory('default'); // reset category after adding a video link
  };

  const handleTrendingControllerUpdate = async () => {
    try {
      const db = firebase.firestore();
      const trendingControllerRef = db.collection('controller').doc('trending_controller');
      // save to sessionstorage
      
      const trendingControllerData = {
        tdc: tdcCheckBox,
        dg: dgCheckBox,
        srvtv: srvtvCheckBox,
        dmh: dmhCheckBox,
        dpcs: dpcsCheckBox,
        dch: dchCheckBox,
      };

      trendingControllerRef.set(trendingControllerData);
      sessionStorage.setItem('trendingControllerData', JSON.stringify(trendingControllerData));
      alert('Trending controller data updated successfully!');
    } catch (error) {
      console.error('Error updating trending controller data:', error);
      alert('An error occurred while updating trending controller data. Please try again.');
    }
  }

  const handleClearTrendingController = () => {
    setTdcCheckBox(trendingControllerData.tdc);
    setDgCheckBox(trendingControllerData.dg);
    setSrvtvCheckBox(trendingControllerData.srvtv);
    setDmhCheckBox(trendingControllerData.dmh);
    setDpcsCheckBox(trendingControllerData.dpcs);
    setDchCheckBox(trendingControllerData.dch);
    alert('Trending controller data cleared successfully!');

  }
  

  return (
    <div className="admin-panel-container">
      <h1 className="admin-panel-title">Admin Panel</h1>

      <div className="admin-controller-panel">
        {/* Controller */}
        <div className="admin-controller-row">
          <div className="admin-controller-name">Controller</div>
          <div className="admin-controller-fields">
            <div className="field-item">
              <h6 className="field-name">Server</h6>
              <select className="controller-value" value={controller.run} onChange={(e) => setController({ ...controller, run: e.target.value })}>
                <option value="404">404</option>
                <option value="offline">Offline</option>
                <option value="online">Online</option>
              </select>
            </div>
            <div className="field-item">
              <h6 className="field-name">Duration</h6>
              <input type="number" className="field-value" value={controller.duration} onChange={(e) => setController({ ...controller, duration: e.target.value })} />
            </div>
          </div>
          <div className="admin-controller-update-reset-button">
            <button className="btn btn-success admin-panel-btn" onClick={() => handleDataUpdate('Controller', controller)}>Update</button>
            <button className="btn btn-danger admin-panel-btn" onClick={() => setController(JSON.parse(sessionStorage.getItem('controllerData')))}>Reset</button>
          </div>
        </div>
      </div>

      <div className="admin-data-panel">
        {Object.entries(socialMediaData).map(([platform, data]) => (
          <div className="social-media-row" key={platform}>
            <div className="social-media-name">{platform}</div>
            <div className="social-media-fields">
              {Object.entries(data).map(([key, value]) => (
                <div className="field-item" key={key}>
                  <h6 className="field-name">{key}</h6>
                  <input type="text" className="field-value" value={value} onChange={(e) => handleInputChange(platform, key, e.target.value)} />
                </div>
              ))}
            </div>
            <div className="social-media-update-reset-button">
              <button className="btn btn-success admin-panel-btn" onClick={() => handleDataUpdate(platform, data)}>Update</button>
              <button className="btn btn-danger admin-panel-btn" onClick={() => handleDataReset(platform, socialMediaData[platform])}>Reset</button>
            </div>
          </div>
        ))}
        <div className="admin-panel-update-reset-all-buttons">
          <button className="btn btn-success admin-panel-btn" onClick={handleUpdateAll}>Update All</button>
          <button className="btn btn-danger admin-panel-btn" onClick={handleResetAll}>Reset All</button>
        </div>
      </div>

      <div className="admin-controller-panel">
        <div className="admin-controller-row">
          <div className="admin-controller-name">Video Link</div>
          <div className="admin-controller-fields">
            <input type="text" placeholder="Paste video link" value={videoLink} width='30rem' onChange={(e) => setVideoLink(e.target.value)}/>
            <div className="field-item">
              {/* <h6 className="field-name">Server</h6> */}
              <select className="field-value" value={videoCategory} onChange={(e) => setVideoCategory(e.target.value)} style={{width:'10rem'}} >
                <option value="default">Select Category</option>
                <option value="TDC">TheDIVINEcasteR</option>
                <option value="DG">DIVINES GAMIING</option>
                <option value="SRVTV">SRV Travel Vlogs</option>
                <option value="CH">DIVINES COOKING HUB</option>
                <option value="DMH">DIVINES MUSIC HEART</option>
                <option value="DPCS">DIVINES PC SUPPORT</option>
              </select>
            </div>
          </div>
          <div className="admin-controller-update-reset-button">
            <button className="btn btn-success admin-panel-btn" onClick={() => handleAddVideoLink(videoLink)}>Add</button>
            <button className="btn btn-danger admin-panel-btn" onClick={handleClearVideoLink}>Clear</button>
          </div>
        </div>
      </div>

      <div className="admin-controller-panel">
        <div className="admin-controller-row">
          <div className="admin-controller-name">Add Product</div>
          <div className="admin-controller-fields">
            <div className="add-product-form">
              <div className="add-product-and-image">
                <span><input type="file" accept="image/*" onChange={handleProductImageChange} /></span>
                <span className="image-preview">{imageUrl && <img src={imageUrl} alt="preview" style={{ maxWidth: '4.5rem' }} />}</span>
              </div>
              <div className="add-product-details-section">
                <div className="add-product-details">
                  <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                  <input type="text" placeholder="Old Price" value={oldPrice} onChange={(e) => setOldPrice(e.target.value)} />
                  <input type="text" placeholder="New Price" value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
                  <input type="text" placeholder="Purchase Link" value={purchaseLink} onChange={(e) => setPurchaseLink(e.target.value)} />
                </div>
              </div>
              {/* <button onClick={handleProductSave}>Save</button> */}
            </div>
            
          </div>
          <div className="admin-controller-update-reset-button">
            <button className="btn btn-success admin-panel-btn" onClick={handleProductSave}>Add</button>
            <button className="btn btn-danger admin-panel-btn" onClick={handleClearProduct}>Clear</button>
          </div>
        </div>
      </div>

      <div className="admin-controller-panel">
        <div className="admin-controller-row">
          <div className="admin-controller-name">Trending Controller</div>
          <div className="admin-controller-fields trending-controller">
            <div className="trending-controller-item">
              <h6 className="field-name">TheDIVINEcasteR</h6>
              <input type="checkbox" checked={tdcCheckBox} onChange={() => setTdcCheckBox(!tdcCheckBox)} /> |
            </div>
            <div className="trending-controller-item">
              <h6 className="field-name">DIVINES GAMING</h6>
              <input type="checkbox" checked={dgCheckBox} onChange={() => setDgCheckBox(!dgCheckBox)} /> |
            </div>
            <div className="trending-controller-item">
              <h6 className="field-name">SRV Travel Vlogs</h6>
              <input type="checkbox" checked={srvtvCheckBox} onChange={() => setSrvtvCheckBox(!srvtvCheckBox)} /> 
            </div>
            <div className="trending-controller-item">
              <h6 className="field-name">DIVINES MUSIC HEART</h6>
              <input type="checkbox" checked={dmhCheckBox} onChange={() => setDmhCheckBox(!dmhCheckBox)} /> |
            </div>
            <div className="trending-controller-item">
              <h6 className="field-name">DIVINES PC SUPPORT</h6>
              <input type="checkbox" checked={dpcsCheckBox} onChange={() => setDpcsCheckBox(!dpcsCheckBox)} /> |
            </div>
            <div className="trending-controller-item">
              <h6 className="field-name">DIVINES COOKING HUB</h6>
              <input type="checkbox" checked={dchCheckBox} onChange={() => setDchCheckBox(!dchCheckBox)} />
            </div>
            
            
          </div>

          <div className="admin-controller-update-reset-button">
            <button className="btn btn-success admin-panel-btn" onClick={handleTrendingControllerUpdate}>Update</button>
            <button className="btn btn-danger admin-panel-btn" onClick={handleClearTrendingController}>Clear</button>
          </div>
        </div>
      </div>
      

      
    </div>
  );
};

export default AdminPanel;