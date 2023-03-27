import React from 'react'
import CartWidget from './CartWidget'
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Spacer,
  Box,
  Heading 
} from '@chakra-ui/react'
import {  } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from "@chakra-ui/icons"

const NavBar = () => {
  return (
    <>
  <Flex minWidth='max-content' alignItems='center' gap='2'>

  <Box p='2'>
    
    <Heading size='md'> <Link to={"/"}>La Forja de Moradin</Link></Heading>
     </Box>
     <Spacer />
     <Link to={"/catalogue"}>
     <Button as={Button} colorScheme='telegram' size="lg" variant="outline" m="5" >
             Catalogo
      </Button></Link>
       <Menu>
              <MenuButton  as={Button} size="lg" variant="outline"  colorScheme="telegram"          rightIcon={<ChevronDownIcon />}  m="5">
                Categorias
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"Hachas"}`}>
                  <MenuItem>Hachas</MenuItem>
                </Link>
                <Link to={`/category/${"Espadas"}`}>
                  <MenuItem>Espadas</MenuItem>
                </Link>
                <Link to={`/category/${"Guadaña"}`}>
                  <MenuItem>Guadañas</MenuItem>
                </Link>
                <Link to={`/category/${"Hoz"}`}>
                  <MenuItem>Hoz</MenuItem>
                </Link>
                </MenuList>
            </Menu>
            <Link to={"/cart"}>
              <CartWidget/>
            </Link>
            
            <ItemCount/>

 


</Flex>





    </>
  )
}
  
export default NavBar
        
 



