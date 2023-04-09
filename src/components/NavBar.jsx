import React from 'react'
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box,
    Center,
    Wrap,
    WrapItem,
    Avatar
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Spacer } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';



const NavBar = () => {
    return (
<>
    <Box  className='navbar'  bg="gray.300" color="#262626">
        <Flex alignItems="center" justifyContent="space-between"  gap="2" >
        
            
    <Box>                 
           <Heading size="sm" >
<Wrap>
  <WrapItem>
    <Avatar size='xl' name='Enano Con armadura' src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/678b59112524843.6016492f54472.jpg' />
  </WrapItem>
</Wrap>
                    <Link to={"/"}>
                            <h1>LA FORJA DE MORADIN</h1>
                    </Link>
                    </Heading>
                </Box>
                <Box mr="85" >
                    <Menu >
                        <Link to={"/catalogue"}>
                            <MenuButton
                            as={Button}
                            size="lg"
                            variant="outline"
                            colorScheme="pink"
                            mx="2"
                            mr="85"
                            >
                            Catalogo
                            </MenuButton>
                        </Link>
                    </Menu>
                    <Menu>
                        <MenuButton
                            as={Button}
                            size="lg"
                            variant="outline"
                            colorScheme="pink"
                            rightIcon={<ChevronDownIcon />}
                            mx="2"
                        >
                            Categorias
                        </MenuButton>
                    <MenuList>
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
                </Box>
                <Box p="30" >
                    <Link to={"/cart"}>
                    <CartWidget />
                    </Link>
                </Box>
            </Flex>
      
    </Box>
        </>
    );
    };

export default NavBar

