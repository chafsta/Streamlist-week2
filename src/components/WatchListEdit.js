import React, { useState } from "react";

function WatchListEdit({ item, onClose, onSubmit }) {
  const [updatedTitle, setUpdatedTitle] = useState(item.title);
  const [updatedNotes, setUpdatedNotes] = useState(item.notes);

  const handleSubmit = () => {
    const updatedItem = { ...item, title: updatedTitle, notes: updatedNotes };
    onSubmit(updatedItem);

    // Update Local Storage
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const updatedWatchlist = watchlist.map((listItem) =>
      listItem.id === updatedItem.id ? updatedItem : listItem
    );
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));

    onClose();  
  };

  return (
    <div>
      <h2>Edit Watchlist Item</h2>
      <label>
        Title:
        <input
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Notes:
        <textarea
          value={updatedNotes}
          onChange={(e) => setUpdatedNotes(e.target.value)}
        ></textarea>
      </label>
      <br />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default WatchListEdit;
