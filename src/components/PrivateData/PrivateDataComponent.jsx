import React, { useState } from 'react';
import './PrivateDataComponent.css';
import data from './Data';

import folderImageRed from '../../assets/Gallery/folder-image-red.png';
import folderImageGreen from '../../assets/Gallery/folder-image-green.png';
import folderImageYellow from '../../assets/Gallery/folder-image-yellow.png';
import folderImagePurple from '../../assets/Gallery/folder-image-purple.png';

const PrivateDataComponent = () => {
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState('title');

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    sortData(event.target.value);
  };

  const handleLogout = () => {
    window.location.reload();
  }

  const sortData = (sortBy) => {
    let sorted;
    switch (sortBy) {
      case 'title':
        sorted = [...sortedData].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'priority':
        sorted = [...sortedData].sort((a, b) => {
          if (a.priority < b.priority) return -1;
          if (a.priority > b.priority) return 1;
          return 0;
        });
        break;
      case 'id':
        sorted = [...sortedData].sort((a, b) => a.id - b.id);
        break;
      default:
        sorted = sortedData;
    }
    setSortedData(sorted);
  };

  return (
    <>
      <div className="sort-div">
        <select value={sortBy} onChange={handleSortChange} className="sort-selector">
          <option value="id" default>Sort by ID</option>
          <option value="title">Sort by Name</option>
          <option value="priority">Sort by Priority</option>
        </select>
        <button className="btn btn-danger logout-button" onClick={handleLogout}>Logout</button>
      </div>
      <div className="data-item-box">
        {sortedData.map(item => (
          <a href={item.link} target="_blank" rel="noopener noreferrer" key={item.id}>
            <div className="data-item-container">
              <div className="data-item">
                <div className="data-title">{item.title}</div>
                <div className="data-image">
                  {(() => {
                    switch (item.priority) {
                      case 'high':
                        return <img src={folderImageRed} alt="" />;
                      case 'medium':
                        return <img src={folderImageGreen} alt="" />;
                      case 'low':
                        return <img src={folderImageYellow} alt="" />;
                      default:
                        return <img src={folderImagePurple} alt="" />;
                    }
                  })()}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default PrivateDataComponent;
