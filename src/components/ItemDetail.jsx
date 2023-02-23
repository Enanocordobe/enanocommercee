import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    CardFooter,
    Divider,
    Alert,
  } from "@chakra-ui/react";
  import espada from "../assets/espada.jpg";
  import { useParams } from "react-router-dom";
  import ItemCount from "./ItemCount";
  
  const ItemDetail = ({ armeria }) => {
    const { id } = useParams();
     
    const armeria = armeria.filter((armeria) => armeria.id == id);
  
    return (
      <>
        {armeria.map((armeria) => (
          <div key={armeria.id}>
            <Center p="1rem">
              <Card className="card-main">
                <CardBody>
                  <Image borderRadius="lg" src={espada} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md"armeria>{armeria.name}</Heading>
                    <Text color="blue.800" fontSize="l">
                      Description: {armeria.description}
                    </Text>
                    <Text color="blue.800" fontSize="l">
                      Category: {armeria.category}
                    </Text>
                    <Text color="red.600" fontSize="xl">
                      Stock: {armeria.stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Price: U$D {armeria.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter className="card-footer">
                  <ItemCount
                    stock={armeria.stock}
                    id={armeria.id}
                    price={armeria.price}
                    name={armeria.name}
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