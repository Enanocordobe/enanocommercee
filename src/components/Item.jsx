import React from "react";
import {
  Center,
  Card,
  CardBody,
  Heading,
  Text,
  Divider,
  Stack,
  CardFooter,
  Button,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, detail, price, onAddToCart }) => {
  return (
    <div key={id}>
      <Center p="1rem">
        <Card className="card-main">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">{name}</Heading>
              <Text>{detail}</Text>
              <Image src={image} />
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter className="card-footer">
            <Center className="btn-center">
              <Text>
                <p>Precio:${price}</p>
              </Text>
              <Button onClick={onAddToCart}>Agregar al Carrito</Button>
            </Center>
          </CardFooter>
        </Card>
      </Center>
    </div>
  );
};

export default Item;