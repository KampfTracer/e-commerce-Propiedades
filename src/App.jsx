import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Navbar from "./componentes/Navbar";
import  Banner  from "./componentes/Banner/Banner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemListContainer/ItemDetailContainer";
import Nosotros from "./componentes/ItemListContainer/Nosotros";
import Contacto from "./componentes/Contacto";
import {CartProvider } from "./context/CartContext";
import Carrito from "./componentes/Carrito";
import Checkout from "./componentes/Checkout";

function App() {


  return (
    <div>
      <CartProvider>

      <BrowserRouter>    

      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path="/propiedades/:categoria" element={<ItemListContainer />}/>
        <Route path="/nosotros" element={<Nosotros />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/carrito" element={<Carrito />}/>
        <Route path="/checkout" element={<Checkout />}/>



      </Routes>

      <Banner/>

      </BrowserRouter>  
      </CartProvider>

      </div>
  
    
    
  );
}
export default App;
