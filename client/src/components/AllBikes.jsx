import React from 'react';
import SingleBike from './SingleBike.jsx';

const AllBikes = ({ data, deleteBike, setView, setOneData }) => {
  return (
    <div>
      {data.map((bike, index) => (
        <SingleBike
          key={index}
          bike={bike}
          deleteBike={deleteBike}
          setView={setView}
          setOneData={setOneData}
        />
      ))}
    </div>
  );
};

export default AllBikes;
