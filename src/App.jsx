
import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import {ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from './components/adminComponents/ProductFormContainer/ProductFormContainer'
import { MainLayout } from './layouts/MainLayouts'
import { AdminLayout } from './layouts/AdminLayouts'
import { RutaProtegida } from './components/RutaProtegida/RutaProtegida'
import { Login } from './components/Login/Login'


function App() {



  return (
    <>
    <BrowserRouter>
      <CartProvider>
          <div> 
          <Routes>
            <Route element ={<MainLayout/>}> 
              <Route path="/" element={ <ItemListContainer/> } />
              <Route path="/detail/:id" element={ <ItemDetailContainer/> } />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/carrito" element={<Cart />} />
            </Route>
            <Route path="/admin" element ={<AdminLayout/>}>
              <Route index element = {<Login/>}></Route>
              {/* <Route path="/admin" element={<ProductFormContainer />} /> */}
              <Route path='alta-productos' element = {<RutaProtegida>
                <ProductFormContainer />
              </RutaProtegida>}></Route>
            </Route>
         
          </Routes>
      <Footer/>
      </div>
    </CartProvider>
    </BrowserRouter> 
    </>
  )
}

export default App
