import React, { useState } from "react";
import WatchListEdit from "./WatchListEdit";
import WatchListDelete from "./WatchListDelete";

function WatchListMain() {
  const [watchlist, setWatchlist] = useState([
    { id: 1, title: "Inception", notes: "Must watch soon", completed: false },
    { id: 2, title: "The Matrix", notes: "Rewatch for analysis", completed: true },
  ]);

  const [editingItem, setEditingItem] = useState(null); 
  const [deletingItem, setDeletingItem] = useState(null); 

  const handleEditSubmit = (updatedItem) => {
    setWatchlist(watchlist.map(item => (item.id === updatedItem.id ? updatedItem : item)));
    setEditingItem(null);
  };

  const handleDeleteConfirm = (id) => {
    setWatchlist(watchlist.filter(item => item.id !== id));
    setDeletingItem(null);
  };

  const toggleCompletion = (id) => {
    setWatchlist(watchlist.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  return (
    <div>
      <h1>My Watchlist</h1>
      {watchlist.map(item => (
        <div key={item.id} style={{ textDecoration: item.completed ? "line-through" : "none" }}>
          <h2>{item.title}</h2>
          <p>{item.notes}</p>
          <button onClick={() => toggleCompletion(item.id)}>
            {item.completed ? "Mark Incomplete" : "Mark Complete"}
          </button>
          <button onClick={() => setEditingItem(item)}>Edit</button>
          <button onClick={() => setDeletingItem(item)}>Delete</button>
        </div>
      ))}

      {/* Render Edit  */}
      {editingItem && (
        <WatchListEdit
          item={editingItem}
          onClose={() => setEditingItem(null)}
          onSubmit={handleEditSubmit}
        />
      )}

      {/*  Delete */}
      {deletingItem && (
        <WatchListDelete
          item={deletingItem}
          onClose={() => setDeletingItem(null)}
          onConfirm={handleDeleteConfirm}
        />
      )}
    </div>
  );
}

export default WatchListMain;
