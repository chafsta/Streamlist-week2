import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StreamList from './components/StreamList.js';
import Movies from './components/Movies.js';
import MovieDetails from './components/MovieDetails.js';
import Cart from './components/Cart.js';
import About from './components/About.js';

function App() {
  return (
    <Router>
        {/* StreamList route */}
        <Route path="/streamlist" element={<StreamList />} />

       { /*(Movies route (no :i d)} */     
       <Route path="/movies" element={<Movies />} />

        /* Movie details route (yes :id) */}
        <Route path="/movies/:id" element={<MovieDetails />} />

        {/* Cart route (usually no :id unless you really need it) */}
        <Route path="/cart" element={<Cart />} />

        {/* About route (usually no :id) */}
        <Route path="/about" element={<About />} />
      
    </Router>
  );
}

export default App;
