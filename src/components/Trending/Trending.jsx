// import React from 'react';
// import './Trending.css';
// import VideoComponent from './VideoComponent/VideoComponent';
// // import VideoLinkList from './VideoComponent/VideoLinkList';
// import Footer from '../Footer/Footer';

// const Trending = () => {
//   const TDCVideoLinks = JSON.parse(sessionStorage.getItem('TDCVideoLinks')) || [];
//   const DGVideoLinks = JSON.parse(sessionStorage.getItem('DGVideoLinks')) || [];
//   const SRVTVVideoLinks = JSON.parse(sessionStorage.getItem('SRVTVVideoLinks')) || [];
//   return (
//     <div className="trending-container">
//       <div className="videos-container">
//         {/* <hr /> */}
//         <h5 className="trending-title">TheDIVINEcasteR</h5>
//         <hr />
//         <div className="video-item">
//           {/* <VideoComponent VideoLinkList={VideoLinkList}/> */}
//           <VideoComponent videoLinks={TDCVideoLinks} />
//         </div>
//         <h5 className="trending-title">DIVINES GAMING</h5>
//         <hr/>
//         <div className="video-item">
//           {/* <VideoComponent VideoLinkList={VideoLinkList}/> */}
//           <VideoComponent videoLinks={DGVideoLinks} />
//         </div>
//         <h5 className="trending-title">SRV Travel Vlogs</h5>
//         <hr />
//         <div className="video-item">
//           {/* <VideoComponent VideoLinkList={VideoLinkList}/> */}
//           <VideoComponent videoLinks={SRVTVVideoLinks} />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default Trending


import React from 'react';
import './Trending.css';
import VideoComponent from './VideoComponent/VideoComponent';
import Footer from '../Footer/Footer';

const Trending = () => {
  const channels = [
    { name: 'TheDIVINEcasteR', id: 'tdc', videoLinks: JSON.parse(sessionStorage.getItem('TDCVideoLinks')) || [] },
    { name: 'DIVINES GAMING', id: 'dg', videoLinks: JSON.parse(sessionStorage.getItem('DGVideoLinks')) || [] },
    { name: 'SRV Travel Vlogs', id: 'srvtv', videoLinks: JSON.parse(sessionStorage.getItem('SRVTVVideoLinks')) || [] },
    { name: 'DIVINES MUSIC HEART', id: 'dmh', videoLinks: JSON.parse(sessionStorage.getItem('DMHVideoLinks')) || [] },
    { name: 'DIVINES PC SUPPORT', id: 'dpcs', videoLinks: JSON.parse(sessionStorage.getItem('DPCSVideoLinks')) || [] },
    { name: 'DIVINES COOKING HUB', id: 'dch', videoLinks: JSON.parse(sessionStorage.getItem('DCHVideoLinks')) || [] }
  ];

  const trendingControllerData = JSON.parse(sessionStorage.getItem('trendingControllerData'));
  // console.log('test', trendingControllerData.srvtv)
  return (
    <div className="trending-container">
      <div className="videos-container">
        {channels.map(channel => (
          // trendingControllerData[channel.id] &&
          trendingControllerData[channel.id] === true && 
          <div key={channel.name}>
            <h5 className="trending-title">{channel.name}</h5>
            <hr />
            <div className="video-item">
              <VideoComponent videoLinks={channel.videoLinks} />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Trending;
