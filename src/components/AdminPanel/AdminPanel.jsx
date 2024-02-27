import React, { useState } from 'react';
import './AdminPanel.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from '../../FirebaseConfig/FirebaseConfig';

firebase.initializeApp(firebaseConfig);

const AdminPanel = () => {
  const [controller, setController] = useState(JSON.parse(sessionStorage.getItem('controllerData')));
  const [socialMediaData, setSocialMediaData] = useState(JSON.parse(sessionStorage.getItem('socialMediaData')));

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

  //Handle data update
  const handleDataUpdate = async (platform, data, showAlert = true) => {
    // console.log(`Calling updateFirestoreData for ${platform}`);
    updateFirestoreData('data', platform.toLowerCase(), data);
    setSocialMediaData({ ...socialMediaData, [platform]: data });
    showAlert && alert(`${platform} data updated successfully!`);
  };

  //Handle data reset
  const handleDataReset = (platform, data, showAlert = true) => {
    setSocialMediaData({ ...socialMediaData, [platform]: data });
    showAlert && alert(`${platform} data reset successfully!`);
  };

  //Handle update all
  const handleUpdateAll = async () => {
    // console.log('Updating all social media platforms');
    for (const [platform, data] of Object.entries(socialMediaData)) {
      await handleDataUpdate(platform, data, false);
    }
    alert('All data updated successfully!');
  };

  //Handle reset all
  const handleResetAll = () => {
    // console.log('Resetting all social media platforms');
    for (const [platform, data] of Object.entries(socialMediaData)) {
      handleDataReset(platform, data, false);
    }
    alert('All data reset successfully!');
  };


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
                  <input type="text" className="field-value" value={value} onChange={(e) => handleDataUpdate(platform, { ...data, [key]: e.target.value })} />
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
    </div>
  );
};

export default AdminPanel;
