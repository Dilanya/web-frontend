// src/components/Map.jsx
import React from 'react';
import map from '../images/map.png'

const Map = () => {
  

  return (
    <div style={{  height: '1%' }}>
      <a href='https://www.bing.com/maps?osid=05c47c15-3f99-4d8d-a5ab-e3936b915212&cp=7.147565~79.869425&lvl=16&pi=0&imgid=c37b33e1-4cec-4772-ac3c-6a655874ebf3&v=2&sV=2&form=S00027' className="news-card__card-link1"></a>
      <img src={map}  alt="map" />
    </div>
  );
};

export default Map;
