import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const CartWidget = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      <div className="cart">
        <Button size="lg" variant="outline" colorScheme="pink">
          <span className="material-symbols-outlined">shopping_cart</span>
          <span>{quantity}</span>
        </Button>
      </div>
    </>
  );
};

export default CartWidget;
