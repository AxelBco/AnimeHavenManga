import React from 'react';

const Cart = ({ cart, clearCart }) => {
  const totalPrice = cart.reduce((total, item) => total + (Math.random() * (50 - 5) + 5) * item.quantity, 0); // Suponiendo un precio aleatorio

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <div className="cart-container">
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.title} style={{ width: '100%' }} />
                <div className="cart-item-info">
                  <span>{item.title}</span>
                  <span>Cantidad: {item.quantity}</span>
                </div>
              </div>
            ))}
          </div>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
