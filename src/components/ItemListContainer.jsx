import ItemList from "./ItemList";
import Data from "../data.json";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
const ItemListContainer = () => {
  const { category } = useParams();
  
  const filtrarCat = Data.filter((armeria) => armeria.category === category);
  return (
    <div>
      <Center >
        <Heading>
          
        </Heading>
      </Center>
      {category ? <ItemList armeria={filtrarCat} /> : <ItemList armeria={Data} />}
    </div>
  );
};

export default ItemListContainer;