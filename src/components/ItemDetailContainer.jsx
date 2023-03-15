import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    
        const [item, setItem] = useState({});
        const {productoid} = useParams ();
    
        useEffect (() => {
                fetch("https://api.mercadolibre.com/items/" + productoid)
                .then((respuesta)=> respuesta.json())
                .then((data)=>{
                    setItem(data);
                })
            }, [productoid]);
    
        
        
        return (
            <ItemDetail item={item}></ItemDetail>
        )
    }


export default ItemDetailContainer;