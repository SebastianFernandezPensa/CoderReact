import Contacto from "./components/Contacto";
import Destacado from "./components/Destacado";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <div>
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>} />
        <Route path={"/category/:id"} element={<ItemListContainer/>} />
      </Routes>
      <Destacado/>
      <Contacto/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
