import { createContext, useState } from "react";
const CartContext = createContext(null);


const ShoppingCartContext = ({children}) => {  
  const [cartItems, setCartItems] = useState([]);

  const addToCartHandler = (armas) => {
    const existItem = cartItems.find((item) => item.id === armas.id);
    if (existItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === armas.id ? { ...existItem, qty: existItem.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...armas, qty: 1 }]);
    }
  };

  const removeCartItemHandler = (armas) => {
    const newCartItems = cartItems.filter((item) => item.id !== armas.id);
    setCartItems(newCartItems);
  }; 
  return (
    <CartContext.Provider value={{cartItems, setCartItems}}>
      {children}
      <h1>Carrito de Compras</h1>
      <ProductList products={products} onAddToCart={addToCartHandler} />
      <Cart cartItems={cartItems} onRemoveCartItem={removeCartItemHandler} />
    </CartContext.Provider>
  );
  }

export default ShoppingCartContext;


 
