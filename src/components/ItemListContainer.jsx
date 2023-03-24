import ItemList from "./ItemList";
import {useState, useEffect} from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore"
import {useParams} from "react-router-dom";
import {Heading, Center} from "@chakra-ui/react";
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect (()=>{
    const db =getFirestore();
    const itemsCollection = collection(db, "armas");
    getDocs(itemsCollection).then((snapshot)=>{
      const docs = snapshot.docs.map((doc)=> doc.data())
    });
  }, []);

const {category} = useParams();
  
  const filtrarCat = Data.filter((armerias) => armerias.category === category);
  return (
    <div>
      {products.map((prod)=>(
        <div key={prod.name}>
          <h3>Nombre:{prod.name}</h3>
          <p>Detalles:{prod.detail}</p>
          <h2>Precio: ${prod.price}</h2>
        </div>
      ))}
      <Center >
        <Heading>
          
        </Heading>
      </Center>
      {category ? <ItemList armerias={filtrarCat} /> : <ItemList armerias={Data} />}
    </div>
  );
};

export default ItemListContainer;