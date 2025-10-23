
import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import {ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { CartProvider } from './context/CartContext/CartProvider'




function App() {



  return (
    <>
    <BrowserRouter>
      <CartProvider>
          <div> 
      <Header/>
          <Routes> 
            <Route path="/" element={ <ItemListContainer/> } />
            <Route path="/detail/:id" element={ <ItemDetailContainer/> } />
         
          </Routes>
      <Footer/>
      </div>
    </CartProvider>
    </BrowserRouter> 
    </>
  )
}

export default App
