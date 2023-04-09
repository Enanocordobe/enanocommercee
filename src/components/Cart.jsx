import {
  Button,
  Container,
  Center,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Flex,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import SendOrder from "./SendOrder";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const clearCart = () => {
    setCart([]);
  };

  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const precioSubtotal = (item) => {
    return item.quantity * item.price;
  };

  const precioTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += precioSubtotal(item);
    });
    return total;
  };

  return (
    <>
      <Center bg="pink" h="100px" color="black">
        <Heading as="h2" size="2xl">
          CESTA DE PRODUCTOS
        </Heading>
      </Center>
      {cart.length > 0 ? (
        <>
          {cart.map((item) => {
            return (
              <Container key={item.id}
                maxW="350px">
                <Card alig="center">                  
                 <CardHeader>                    
                    <Heading size="md">{item.name}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text as="b">Cantidad: {item.quantity}</Text>
                    <Text>Precio: $ {item.price}</Text>
                  </CardBody>
                  <CardFooter>                    
                      <Text p="4">Subtotal: $ {precioSubtotal(item)}</Text>
                      <Button
                        colorScheme='pink'
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        Eliminar
                      </Button>
                      </CardFooter>               
                </Card>
              </Container>
            );
          })}
          <Container alig="center">
          <Card  maxW="350px">
            <CardBody>         
              <Text> Precio total: $ {precioTotal()} </Text>
              <Button colorScheme="pink" onClick={clearCart}>
                Borrar carrito
              </Button>
            </CardBody>
          </Card>
          </Container> 
          <SendOrder cart={cart} precioTotal={precioTotal()} />
        </>
      ) : (
        <Flex alignItems="center" justifyContent="center" className="nada-carrito">
          <Center>
            <Text fontSize="5xl">DEBES COLOCAR LOS OBJETOS DE TU INTERES AQUI</Text>
          </Center>
        </Flex>
      )}
    </>
  );
};

export default Cart;