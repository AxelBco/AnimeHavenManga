import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); // Evita que el formulario se recargue
    if (query) {
      navigate(`/search?query=${encodeURIComponent(query)}`); // Navega a la ruta de búsqueda
      setQuery(''); // Limpia el campo de búsqueda
    }
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input 
        type="text" 
        placeholder="Buscar anime o manga..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} // Actualiza el estado cuando cambie el valor del input
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
