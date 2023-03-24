import {ButtonGroup, IconButton,Button} from '@chakra-ui/react';
import React, {useState} from 'react'

const ItemCount = () => {
    const [contador, setContador] = useState("");
    const sumar = () =>{
        setContador (contador +1);        
    }
    const restar = () =>{
        setContador  (contador -1);         
    }
    const reset = ()=>{
        setContador(0);
    }
  return (
    <ButtonGroup size= "sm" isAttached variant="outline">

        <IconButton onClick={restar}/>
        <Button>{contador}</Button>
        <IconButton onClick={sumar}/>
        <IconButton onClick={reset}/>
    </ButtonGroup>    
  )
}

export default ItemCount