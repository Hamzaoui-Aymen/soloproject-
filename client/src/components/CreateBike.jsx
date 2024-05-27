import React, { useState } from 'react';

const CreateBike = ({ createBike }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [available, setAvailable] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    createBike({
      name,
      image,
      price,
      rating,
      available,
      description
    });
  };

  return (
    <div className="create-post">
      <h1 className="new-post-title">Rent Bike</h1>
      <form className="new-post-form">
        <input
          type="text"
          placeholder="Name"
          required
          minLength="3"
          onChange={(e) => setName(e.target.value)}
        />

        <div className="image-container">
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            placeholder="Image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>

        <div className="price-container">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="rating-container">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            placeholder="Rating"
            min="0"
            max="5"
            step="0.1"
            onChange={(e) => setRating(e.target.value)}
          />
        </div>

        <textarea
          className="textarea-field"
          placeholder="Description..."
          required
          minLength="20"
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="available-container">
          <label htmlFor="available">Available:</label>
          <input
            type="text"
            placeholder="Availability"
            onChange={(e) => setAvailable(e.target.value)}
          />
        </div>

        <input
          className="btn btn-secondary publish-button"
          type="button"
          value="Publish"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default CreateBike;
