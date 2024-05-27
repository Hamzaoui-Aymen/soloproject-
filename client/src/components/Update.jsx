import React, { useState } from 'react';

const Update = ({ updateBike, oneData }) => {
  const [name, setName] = useState(oneData.name || '');
  const [image, setImage] = useState(oneData.image || '');
  const [price, setPrice] = useState(oneData.price || '');
  const [rating, setRating] = useState(oneData.rating || '');
  const [available, setAvailable] = useState(oneData.available || '');
  const [description, setDescription] = useState(oneData.description || '');

  return (
    <div className='update-form'>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        placeholder='Image'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type='text'
        placeholder='Price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type='number'
        placeholder='Rating'
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <input
        type='text'
        placeholder='Available'
        value={available}
        onChange={(e) => setAvailable(e.target.value)}
      />
      <label htmlFor='available'>Available:</label>
      <input
        type='text'
        placeholder='Description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className='update-btn'
        onClick={() =>
          updateBike(oneData.id, {
            name,
            image,
            price,
            rating,
            available,
            description
          })
        }
      >
        Update
      </button>
    </div>
  );
};

export default Update;
