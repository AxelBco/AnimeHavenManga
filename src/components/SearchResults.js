import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductList from './ProductList'; 
const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = new URLSearchParams(useLocation().search).get('query'); // Obtener el query de la URL

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.jikan.moe/v4/manga?q=${encodeURIComponent(query)}`); // Llama a la API de Jikan
        if (!response.ok) {
          throw new Error('Error al obtener resultados de búsqueda');
        }

        const data = await response.json();
        setResults(data.data); // Guarda los resultados
      } catch (error) {
        setError(error.message); // Manejo de errores
      } finally {
        setLoading(false); // Termina el cargador
      }
    };

    fetchSearchResults();
  }, [query]);

  if (loading) return <div>Cargando resultados...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Resultados de búsqueda para: {query}</h2>
      <ProductList products={results} /> 
    </div>
  );
};

export default SearchResults;
