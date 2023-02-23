import React from 'react'
import CartWidget from './CartWidget'
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,  
} from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { ChevronDownIcon } from "@chakra-ui/icons"

const NavBar = () => {
  return (
    <>
  
    
     <Link to={"/"}>La Forja de Moradin</Link>
     <Menu>
     <Link to={"/catalogue"}>
     <MenuButton as={Button} size="lg" variant="outline"            colorScheme="blue"
                  m="5" >
                  Catalogo
                </MenuButton>
     </Link>
       </Menu>
       <Menu>
              <MenuButton
                as={Button}
                size="lg"
                variant="outline"
                colorScheme="blue"
                rightIcon={<ChevronDownIcon />}
                m="5"
              >
                Categorias
              </MenuButton>
              <MenuList className="menu-list">
                <Link to={`/category/${"Hachas"}`}>
                  <MenuItem>Hachas</MenuItem>
                </Link>
                <Link to={`/category/${"Espadas"}`}>
                  <MenuItem>Espadas</MenuItem>
                </Link>
                </MenuList>
            </Menu>
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
            
            <ItemCount/>
  
    </>
  )
}
  
export default NavBar
        
 



