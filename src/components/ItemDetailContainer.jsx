import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const neumaticosCollection = collection(db, "armas");
    getDocs(neumaticosCollection).then((querySnapshot) => {
      const armas = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(armas);
    });
  }, []);
    
    
    
    return <ItemDetail armas={data} />;

    };

export default ItemDetailContainer;