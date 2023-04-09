import Item from "./Item";
import { Container, SimpleGrid , Center} from "@chakra-ui/react";
const ItemList = ({ armas }) => {
  return (
    <>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} p={4}>
          
            {armas?.map((arma) => (
              <Item  key={arma.id} 
              id={arma.id}
              category={arma.category}
              detail={arma.detail}
              stock={arma.stock}
              price={arma.price}
              name={arma.name}              
              image={arma.image}/> 
          ))}
        </SimpleGrid>

      </Container>
    </>
  );
};

export default ItemList;


