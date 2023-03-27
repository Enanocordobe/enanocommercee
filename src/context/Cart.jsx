import React from 'react'



 const Cart = (carrito) => {
        const { cartItems, onRemoveCartItem } = carrito;
        return (
          <div>
            {cartItems.length === 0 && <div>Carrito esta vacio</div>}
            {cartItems.map((armeria) => (
              <div key={armeria.id}>
                <h3>{armeria.name}</h3>
                <p>Precio: {armeria.price}po</p>
                <p>Stock: {armeria.qty}</p>
                <button onClick={() => onRemoveCartItem(armeria)}>Vaciar Carrito</button>
              </div>
            ))}
            
          </div>
        );
      }    
  


export default Cart