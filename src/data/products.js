const products = [
    { id: '1', name: 'Producto 1', price: 10, image: 'https://via.placeholder.com/150', category: 'electronics', description: 'Descripción del producto 1' },
    { id: '2', name: 'Producto 2', price: 20, image: 'https://via.placeholder.com/150', category: 'clothing', description: 'Descripción del producto 2' },
    { id: '3', name: 'Producto 3', price: 30, image: 'https://via.placeholder.com/150', category: 'books', description: 'Descripción del producto 3' },
    // Agrega más productos aquí...
  ];
  
  export const fetchProducts = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = category ? products.filter(p => p.category === category) : products;
        resolve(filteredProducts);
      }, 1000); // Simulando un retardo
    });
  };
  
  export const fetchProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = products.find(p => p.id === id);
        resolve(product);
      }, 1000); // Simulando un retardo
    });
  };
  