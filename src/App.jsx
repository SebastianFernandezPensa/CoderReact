import Contacto from "./components/Contacto";
import Destacado from "./components/Destacado";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";



function App() {
  return (
    <div>
      <NavBar/>
      <Destacado/>
      <ItemListContainer mensaje={"ItemList"}/>
      <Contacto/>
      <Footer/>
    </div>
  );
}

export default App;
