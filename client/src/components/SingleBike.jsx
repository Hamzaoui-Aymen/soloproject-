import React, { useState } from 'react';
import Update from './Update.jsx';

const SingleBike = ({ bike, deleteBike, setOneData, setView }) => {
  const [clicked, setClicked] = useState(true);

  return (
    <div className="single-bike">
      <div>
        <div className="bike-title">{bike.name}</div>
        <div className="bike-details">
          <span className="bike-rating">{bike.rating}</span>
        </div>
        <img src={bike.image} alt="Bike Image" className="bike-image" />
        <div className="bike-availability">{bike.available}</div>
        <div className="bike-description">{bike.description}</div>
      </div>
      <button onClick={() => { setOneData(bike); setView('Update'); }}>Update</button>
      <button onClick={() => deleteBike(bike.id)}>X</button>
    </div>
  );
};

export default SingleBike;
