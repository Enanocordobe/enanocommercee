import { useContext, useState } from "react";
import { ButtonGroup, IconButton, Tooltip, Center, Button } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartContext } from "../context/ShoppingCartContext";

const ItemCount = ({ stock, id, price, name, image }) => {
  const [cart, setCart] = useContext(CartContext);
  const [count, setCount] = useState(1);

  const addQty = () => {
    setCount(count + 1);
  };

  const substractQty = () => {
    setCount(count - 1);
  };

  const addToCart = () => {
    setCart((items) => {
      const isItemFound = items.find((item) => item.id === id);
      if (isItemFound) {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + count };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...items,
          {
            id,
            name,
            quantity: count,
            price,
          },
        ];
      }
    });
  };

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        {count < 1 ? (
          <Tooltip label="minimum stock reached" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={substractQty} />
        )}
        <Center>
          <Button onClick={addToCart} variant="solid" colorScheme="pink">
            Add to cart: {count}
          </Button>
        </Center>
        {count < stock ? (
          <IconButton icon={<AddIcon />} onClick={addQty} />
        ) : (
          <Tooltip label="stock limit reached" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}
      </ButtonGroup>
    </>
  );
};

export default ItemCount;