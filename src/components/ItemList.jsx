import Item from "./Item";
import { Container } from "@chakra-ui/react";

const ItemList = ({ products, onAddToCart }) => {
  if (!products) return null;

  return (
    <Container>
      {products.map((product) => (
        <Item
          key={product.id}
          id={product.id}          
          name={product.name}
          image={product.image}
          detail={product.detail}
          price={product.price}
          category={product.category}
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
    </Container>
  );
};

export default ItemList;
