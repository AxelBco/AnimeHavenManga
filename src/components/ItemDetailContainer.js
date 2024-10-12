import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ addToCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullSynopsis, setShowFullSynopsis] = useState(false); 

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`https://api.jikan.moe/v4/manga/${productId}`);
        if (!response.ok) {
          throw new Error('Error al obtener los detalles del producto');
        }

        const data = await response.json();
        setProduct(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <div>Cargando detalles...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.images.jpg.image_url} alt={product.title} />
      <p>Precio: ${Math.random().toFixed(2)}</p>
      
      {}
      <p>
        {showFullSynopsis ? product.synopsis : `${product.synopsis.substring(0, 100)}...`}
        {}
        <button onClick={() => setShowFullSynopsis(!showFullSynopsis)}>
          {showFullSynopsis ? 'Leer menos' : 'Leer más'}
        </button>
      </p>

      <button className="producto-agregar" onClick={() => addToCart({ id: productId, title: product.title, image: product.images.jpg.image_url })}>
        Agregar al Carrito
      </button>
    </div>
  );
};

export default ItemDetailContainer;
