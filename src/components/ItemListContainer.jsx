import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(
        ()=> {
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=wheyprotein%20&limit=24')
            .then((respuesta) => respuesta.json())
            .then ((data) => {
                setItems(data.results);
            })
        },[]);



    return(
        <div className="container">
            <div className="row">
            <h1>Nuestros Productos</h1>
            <ItemList items={items} />
            </div>
        </div>
    )
}


export default ItemListContainer;