import {
  Center,
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  CardFooter,
  Divider,
  Select,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ armas }) => {
  const { id } = useParams();

  const [producto, setProducto] = useState([]);
 
  
  
  useEffect(() => {
    const db = getFirestore();

    const cubRef = doc(db, "armas", `${id}`);

    getDoc(cubRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("no hay documentos!");
      }
    });
  }, []);

  const armFilter = armas.filter((arma) => arma.id == id);

      return (
      <>  
        <Center bg="pink" h="100px" color="black">          
          <Text p="4">LA FORJA DE MORADIN</Text>
        </Center>
          {armFilter.map((arma) => (
          <div key={arma.id}>
              <Center p="1rem">
              <Card>
                  <CardBody>
                  <Image borderRadius="md" src={arma.image} />
                  <Stack mt="6" spacing="3">
                      <Heading size="md">{arma.name}</Heading>
                      <Text color="blue.800" fontSize="l">
                      Descripcion: {arma.detail}
                      </Text>
                      <Text color="blue.800" fontSize="l">
                      Categoria: {arma.category}
                      </Text>
            
                      <Text color="green.600" fontSize="xl">
                      Precio: $ {arma.price}
                      </Text>
                  </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                  <ItemCount
                      
                      id={arma.id}
                      price={arma.price}
                      name={arma.name}
                      image={arma.image}
                      Detail={arma.detail}
                      stock={arma.stock}
                      
                      
                  />
                  </CardFooter>
              </Card>
              </Center>
          </div>
          ))}
      </>
      );
  };
  
  export default ItemDetail;