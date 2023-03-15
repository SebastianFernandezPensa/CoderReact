import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams ();

    useEffect(
        ()=> {
            let texto_busqueda = id ? id : "wheyprotein,creatina";
            fetch('https://api.mercadolibre.com/sites/MLA/search?q='+ texto_busqueda + '&limit=42')
            .then((respuesta) => respuesta.json())
            .then ((data) => {
                setItems(data.results);
            })
        },[id]);



    return(
        <div className="container">
            <div className="row">
            <h1>Nuestros Productos</h1>
            <ItemCount stock={24}/>
            <ItemList items={items} />
            </div>
        </div>
    )
}


export default ItemListContainer;