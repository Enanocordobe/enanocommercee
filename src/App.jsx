import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import ItemDetailContainer from './components/ItemDetailContainer'
//import StateComponent from './context/StateComponent'
import Cart from './components/Cart'
import ShoppingCartContext from './context/ShoppingCartContext'

const App = () => {
  return (
    
    //<StateComponent>

    <BrowserRouter> 
    <ShoppingCartContext>   
       <NavBar/>
       <Routes>
       <Route exact path="/" element={<Welcome/>}/>
       <Route exact path="/catalogue" element={<ItemListContainer/>}/>
       <Route exact path="/category/:category" element={<ItemListContainer/>}/>
       <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
       <Route exact path="/cart" element={<Cart/>}/>
       
       </Routes> 
       </ShoppingCartContext>           
      </BrowserRouter> 
   //</StateComponent>
   
  )
}

export default App




