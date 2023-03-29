import { createContext, useState } from "react";


const CartContext = createContext(null);

const ShoppingCartContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const onAddToCart = (products) => {
    const existItem = cartItems.find((item) => item.id === products.id);
    if (existItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === products.id ? { ...existItem, qty: existItem.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...products, qty: 1 }]);
    }
  };

  const onRemoveCartItem = (products) => {
    const newCartItems = cartItems.filter((item) => item.id !== products.id);
    setCartItems(newCartItems);
  };

  return (    
    <CartContext.Provider value={{ cartItems, setCartItems, onAddToCart, onRemoveCartItem }}>    
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartContext;


 
