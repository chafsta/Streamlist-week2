import React from "react";

function WatchListDelete({ item, onClose, onConfirm }) {
  const handleDelete = () => {
    onConfirm(item.id);

    // Update Local Storage
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const updatedWatchlist = watchlist.filter((listItem) => listItem.id !== item.id);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));

    onClose(); 
  };

  return (
    <div>
      <h2>Delete Watchlist Item</h2>
      <p>Are you sure you want to delete "{item.title}"?</p>
      <button onClick={handleDelete}>Yes, Delete</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}

export default WatchListDelete;
