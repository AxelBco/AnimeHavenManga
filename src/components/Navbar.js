import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Navbar = ({ cart }) => {
  return (
    <header>
      <div className="header-content">
        <h1 className="store-title">Anime Haven</h1> {}
      </div>
      <SearchBar /> {}
      <nav>
        <ul>
          <li><Link to="/">Catálogo</Link></li>
          <li><Link to="/cart">Carrito ({cart.reduce((total, item) => total + item.quantity, 0)})</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
