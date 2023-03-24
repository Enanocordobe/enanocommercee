import Item from "./Item";
import {Container} from "@chakra-ui/react";
const ItemList = ({armerias}) => {
  return (
    <>
      <Container>
        {armerias.map((armeria) => (
          <Item
            key={armeria.id}
            id={armeria.id}
            name={armeria.name}
            description={armeria.description}
            price={armeria.price}
            stock={armeria.stock}
            category={armeria.category}
            onAddToCart={() => onAddToCart(armeria)}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
