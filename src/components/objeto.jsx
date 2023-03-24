import {useState} from "react";
import {collection, getFirestone, addDoc} from "firebase/firestone";

const objeto = () => {
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const db = getFirestone();
    const orderCollection = collection (db, "orden");
    const handleSubmit = (e) =>{
        e.preventDefault();
        addDoc(orderCollection, order).then(({id}) => setOrderId(id));
        const order = {
            name,
            email,
        };
    };
   
  return (
    <div>
        <form onSubmit={handleSubmit }>
            <input type="text" placeholder="Nombre y Apellido"
            onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
            <button type="submit">Enviar informacion</button>
        </form>
        <p>Nro de Orden: {orderId}</p>
    </div>
  )
}

export default objeto