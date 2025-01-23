import React, { useState, useEffect } from "react";
import WatchListEdit from "./WatchListEdit";
import WatchListDelete from "./WatchListDelete";

function WatchListMain() {
  const [watchlist, setWatchlist] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [deletingItem, setDeletingItem] = useState(null);

  // function to load from Local Storage
  const loadFromLocalStorage = () => {
    const storedWatchlist = localStorage.getItem("watchlist");
    return storedWatchlist ? JSON.parse(storedWatchlist) : [];
  };

  // function to save to Local Storage
  const saveToLocalStorage = (items) => {
    localStorage.setItem("watchlist", JSON.stringify(items));
  };

  // Load watchlist from Local Storage on initial render
  useEffect(() => {
    const initialWatchlist = loadFromLocalStorage();
    setWatchlist(initialWatchlist);
  }, []);

  // Save to Local Storage whenever the watchlist changes
  useEffect(() => {
    saveToLocalStorage(watchlist);
  }, [watchlist]);

  
  const handleEditSubmit = (updatedItem) => {
    const updatedWatchlist = watchlist.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setWatchlist(updatedWatchlist);
    setEditingItem(null);
  };

  const handleDeleteConfirm = (id) => {
    const updatedWatchlist = watchlist.filter((item) => item.id !== id);
    setWatchlist(updatedWatchlist);
    setDeletingItem(null);
  };

  
  const toggleCompletion = (id) => {
    const updatedWatchlist = watchlist.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setWatchlist(updatedWatchlist);
  };

  return (
    <div>
      <h1>My Watchlist</h1>
      {watchlist.map((item) => (
        <div
          key={item.id}
          style={{ textDecoration: item.completed ? "line-through" : "none" }}
        >
          <h2>{item.title}</h2>
          <p>{item.notes}</p>
          <button onClick={() => toggleCompletion(item.id)}>
            {item.completed ? "Mark Incomplete" : "Mark Complete"}
          </button>
          <button onClick={() => setEditingItem(item)}>Edit</button>
          <button onClick={() => setDeletingItem(item)}>Delete</button>
        </div>
      ))}

     
      {editingItem && (
        <WatchListEdit
          item={editingItem}
          onClose={() => setEditingItem(null)}
          onSubmit={handleEditSubmit}
        />
      )}

      {/* Render Delete */}
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
