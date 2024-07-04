// import React from 'react';

// const VideoComponent = ({ VideoLinkList }) => {
//   const updatedLinks = VideoLinkList.map(link => {
//     const parts = link.split('/');
//     link = parts[parts.length - 1];
//     return `${link}`;
//   });
//   return (
//     <>
//       {updatedLinks.map((link, index) => (
//         <iframe key={index}
//         src={`https://www.youtube.com/embed/${link}?autoplay=0&mute=0`} title="Lost 10,000" 
//         frameBorder="0" 
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//         allowFullScreen>
//         </iframe>
//       ))}
//     </>
//   );
// };

// export default VideoComponent;

import React from 'react';

const VideoComponent = ({ videoLinks }) => {
  const updatedLinks = Array.isArray(videoLinks) ? 
  videoLinks.map(link => {
    const parts = link.split('/');
    link = parts[parts.length - 1];
    return `${link}`;
  }) : [];

  return (
    <>
      {updatedLinks.map((link, index) => (
        <iframe key={index}
          src={`https://www.youtube.com/embed/${link}?autoplay=0&mute=0`}
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      ))}
    </>
  );
};

export default VideoComponent;
