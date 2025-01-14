import React from "react";

function WatchListDelete({ item, onClose, onConfirm }) {
  return (
    <div className="model">
      <h2>Delete Item</h2>
      <p>Are you sure you want to delete "{item.title}"?</p>
      <button onClick={() => onConfirm(item.id)}>Yes</button>
      <button onClick={onClose}>No</button>
    </div>
  );
}

export default WatchListDelete;
