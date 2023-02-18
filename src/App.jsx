import Contacto from "./components/Contacto";
import Destacado from "./components/Destacado";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";



function App() {
  return (
    <div>
      <NavBar/>
      <Destacado/>
      <ItemListContainer/>
      <Contacto/>
      <Footer/>
    </div>
  );
}

export default App;
