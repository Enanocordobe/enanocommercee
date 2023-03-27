import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "armas");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setProducts(docs);
    });
  }, []);

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div>
      <Center>
        <Heading>Armas disponibles</Heading>
      </Center>
      <ItemList
        products={
          category
            ? products.filter((prod) => prod.category === category)
            : products
        }
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default ItemListContainer;