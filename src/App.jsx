import Contacto from "./components/Contacto";
import Destacado from "./components/Destacado";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar/>
      <Destacado/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>} />
        <Route path={"/category/:id"} element={<ItemListContainer/>} />
        <Route path={"/producto/:productoid"} element={<ItemDetailContainer/>} />
      </Routes>
      <Contacto/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
