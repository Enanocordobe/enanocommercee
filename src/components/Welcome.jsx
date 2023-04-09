import { Heading, Center, Box,  Text, Image, Flex, SimpleGrid,  } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Center bg="#D6EAF8" h="100px" color="black">
      
        <Text p="4">Todo lo que puedas imaginar en armas lo conseguiras aqui, echate un vistazo</Text>
      </Center>
      <Flex justifyContent="center" alignItems="center"  flex="1" mt="110px">
        <Center>
        <SimpleGrid columns={[1, 2, 4]} spacing="10px" w="100%" h="hacha"   >
            <Link to={`/category/${"Hachas"}`}>
              <Box h="450px" w="350px" marginRight="35px" textAlign="center">
              <Text fontSize="4xl" fontWeight="bold">Hachas</Text>
              </Box>
            </Link>
            
            <Link to={`/category/${"Espadas"}`}>
              <Box  h="450px" w="350px" marginRight="35px" textAlign="center">
                <Text fontSize="4xl" fontWeight="bold">Espadas</Text>
              </Box>
            </Link> 
           
            <Link to={`/category/${"Guadaña"}`}>
              <Box  h="450px" w="350px" marginRight="35px" textAlign="center">
                <Text fontSize="4xl" fontWeight="bold">Guadañas</Text>
              </Box>
            </Link>  
            
            <Link to={`/category/${"Hoz"}`}>
              <Box  h="450px" w="350px" marginRight="35px" textAlign="center">
                <Text fontSize="4xl" fontWeight="bold">Hoz</Text>
              </Box>
            </Link> 
            
        </SimpleGrid>
        </Center>
      </Flex>
    </div>
  );
};

export default Welcome;