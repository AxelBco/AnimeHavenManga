import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="contenedor-productos">
      {products.map(product => (
        <div className="producto" key={product.mal_id}>
          <img src={product.images.jpg.image_url} alt={product.title} />
          <h3 className="producto-titulo">{product.title}</h3>
          <p className="producto-precio">${Math.random().toFixed(2)}</p>
          <Link to={`/product/${product.mal_id}`} className="producto-agregar">Ver Detalle</Link>
          <button onClick={() => addToCart({ id: product.mal_id, title: product.title, image: product.images.jpg.image_url })}>
            Agregar al Carrito
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
