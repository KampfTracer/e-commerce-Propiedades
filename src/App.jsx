import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import Navbar from "./componentes/Navbar";
import  Banner  from "./componentes/Banner/Banner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./componentes/ItemListContainer/ItemDetailContainer";
import Nosotros from "./componentes/ItemListContainer/Nosotros";

function App() {

  return (
    <div>

      <BrowserRouter>    

      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
        <Route path="/propiedades/:categoria" element={<ItemListContainer />}/>
        <Route path="/nosotros" element={<Nosotros />}/>



      </Routes>

      <Banner/>

      </BrowserRouter>  

      </div>
  
    
    
  );
}
export default App;
