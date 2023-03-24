import React from 'react';
import {Center, Card, CardBody, Stack, Heading, Text, CardFooter, Divider} from "@chakra-ui/react";
import { CircularProgress} from '@chakra-ui/react'
import {useParams} from "react-router-dom";
import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import {doc, getDocs, getFirestore} from "firebase/firestore";

const ItemDetail= ({armas}) => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);
  useEffect(()=>{
    const db = getFirestore();
    const oneItem = doc(db, "armas", `${id}`);
    getDocs(oneItem).then((snapshot) =>{
      if (snapshot.exists()){
        const docs = snapshot.data();
        setProduct(docs);
        
      }
    })
    if (!data) {
      return <div><CircularProgress isIndeterminate color='green.300' />Cargando...</div>;
    }
    
  })
  

  return (
    <div>
      
          {product.map((product) => (
            <div key={product.id}>
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
                      id={armeria.id}
                      price={armeria.price}
                      name={armeria.name}
                    />
                  </CardFooter>
                </Card>
              </Center>
            </div>
          ))}
        </div>
      );
    };
    



  
  
  

export default ItemDetail;