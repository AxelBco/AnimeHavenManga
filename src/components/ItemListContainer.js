import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from './ProductList';

const ItemListContainer = ({ addToCart }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = categoryId 
          ? `https://api.jikan.moe/v4/manga?q=${categoryId}` 
          : `https://api.jikan.moe/v4/manga`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error al obtener datos de la API');
        }

        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default ItemListContainer;
