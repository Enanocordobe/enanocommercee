import Item from "./Item";
import { Container } from "@chakra-ui/react";

const ItemList = ({ products}) => {
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
        />
      ))}
    </Container>
  );
};

export default ItemList;
