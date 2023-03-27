import React from 'react';
import { Center, Card, CardBody, Stack, Heading, Text, CardFooter, Divider } from "@chakra-ui/react";
import { CircularProgress } from '@chakra-ui/react'
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import { doc, getFirestore } from "firebase/firestore";

const ItemDetail = ({ armas }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const oneItem = doc(db, "armas", id);

    oneItem.get().then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        setProduct(data);
      }
    });
  }, [id]);

  if (!product) {
    return <div><CircularProgress isIndeterminate color='green.300' />Cargando...</div>;
  }

  return (
    <div>
      <Center p="1rem">
        <Card className="card-main">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.name}</Heading>
              <Text color="blue.800" fontSize="l">
                Detalles: {product.detail}
              </Text>
              <Text color="green.600" fontSize="xl">
                Precio: {product.price}po
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter className="card-footer">
            <ItemCount
              id={id}
              price={product.price}
              name={product.name}
            />
          </CardFooter>
        </Card>
      </Center>
    </div>
  );
};

export default ItemDetail;