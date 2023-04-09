import React from "react";
import {
  Center,
  Card,
  CardBody,
  Heading,
  Text,  
CardFooter,
  Button,
  Image,
  SimpleGrid,
  Stack
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Item = ({ id, name, image, price}) => {
    return (  
    <>
     <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>   
            <div key={id}>
                    <Center>
                    <Card borderWidth="1px" borderRadius="lg" boxShadow="2xl">
                        <CardBody>
                        <Image  boxSize='200px' src={image} alt='Imagen del producto'
      borderRadius='lg'/>
                          <Stack mt='6' spacing='3'>
                            <Heading size="md">{name}</Heading>                            
                            <Text color="red.600" fontSize="xl">
                            Stock: {price}
                            </Text>
                            </Stack>
                            </CardBody>
                        <CardFooter >
                        <Center>
                            <Button variant="solid" colorScheme="pink">
                            <Link to={`/item/${id}`}>Detalles</Link>
                            </Button>
                        </Center>
                        </CardFooter>
                    </Card>
                    </Center>
                     </div>
                     </SimpleGrid>
                     </>
                     );
    };

    export default Item;