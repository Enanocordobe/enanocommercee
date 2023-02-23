import Item from "./Item.jsx";
import { Container } from "@chakra-ui/react";
const ItemList = ({armeria}) => {
  return (
    <>
      <Container>
        {armeria?.map((armeria) => (
          <Item
            key={armeria.id}armeria
            id={armeria.id}
            name={armeria.name}
            description={armeria.description}
            price={armeria.price}
            stock={armeria.stock}
            category={armeria.category}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
