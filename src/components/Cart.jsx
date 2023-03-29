import React, { useContext } from 'react'
import { CartContext } from "../context/ShoppingCartContext";

const Cart = () => {
  const { cartItems, onRemoveCartItem } = useContext(CartContext); // Obtener la lista de productos en el carrito y la función onRemoveCartItem desde el contexto

  return (
    <div>
      {cartItems.length === 0 && <div>Carrito está vacío</div>}
      {cartItems.map((products) => (
        <div key={products.id}>
          <h3>{products.name}</h3>
          <p>Precio: {products.price} po</p>
          <p>Stock: {products.qty}</p>
          <button onClick={() => onRemoveCartItem(products)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
}
  
export default Cart

