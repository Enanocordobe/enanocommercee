import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "armas");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      setProductDetail(docs[0]);
    });
  }, []);

  return <ItemDetail product={productDetail} />;
};

export default ItemDetailContainer;
