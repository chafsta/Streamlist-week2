import React, { useState } from "react";

function WatchListEdit({ item, onClose, onSubmit }) {
  const [formData, setFormData] = useState({ ...item });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass updated item back to main component
  };

  return (
    <div className="model">
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Notes:
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save</button>
        <button onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default WatchListEdit;
