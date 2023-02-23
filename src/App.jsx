import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
const App = () => {
  return (
    <BrowserRouter>
    
       <NavBar/>
       <Routes>
       <Route exact path="/" element={<Welcome/>}/>
       <Route exact path="/catalogue" element={<ItemListContainer/>}/>
       <Route exact path="/category/:category" element={<ItemListContainer/>}/>
       <Route exact path="/item/:id" element={<ItemListContainer/>}/>
       
       </Routes>             
      </BrowserRouter> 
    
  )
}

export default App




