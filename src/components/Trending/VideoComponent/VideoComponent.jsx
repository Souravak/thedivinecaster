import React from 'react';

const VideoComponent = ({ VideoLinkList }) => {
  const updatedLinks = VideoLinkList.map(link => {
    const parts = link.split('/');
    link = parts[parts.length - 1];
    return `${link}`; // Modify the link here as needed
  });
  return (
    <>
      {updatedLinks.map((link, index) => (
        <iframe key={index}
        src={`https://www.youtube.com/embed/${link}?autoplay=0&mute=0`} title="Lost 10,000" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        frameborder="5">
        </iframe>
      ))}
    </>
  );
};

export default VideoComponent;

