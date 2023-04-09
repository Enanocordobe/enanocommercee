import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Text, Center, Image } from "@chakra-ui/react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
const ItemListContainer = () => {
  const [armas, setarmas] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const armasCollection = collection(db, "armas");
    if (category) {
      const armasFiltro = query (armasCollection , where("category","==", category))
      getDocs(armasFiltro).then((querySnapshot)=>{
          const armas = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setarmas(armas);
          
        })
    }else
    getDocs(armasCollection).then((querySnapshot) => {
      const armas = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setarmas(armas);
    });
  }, [category]);


 
  return (
    <div >
      <Center bg="pink" h="50px" color="black">        
        <Text p="10">LA FORJA DE MORADIN</Text>
      </Center>
      <ItemList armas={armas} />
    </div>
  );
};

export default ItemListContainer;
