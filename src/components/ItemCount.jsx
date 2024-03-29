import { useState } from "react";
import {Link} from "react-router-dom";


const ItemCount = ({stock, onAdd}) =>{

    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState (false);
    

    const incrementarStock = () => {
        if (items < itemStock){
        setItems(items + 1);
    }
    }

    const decrementarStock = () => {
        if (items > 1){
        setItems(items - 1);}
    }

    const addtoCart = () =>{
        if(itemStock >= items){
            setItemStock(itemStock -items)
            setItems(1)
            console.log("Agregaste: " + items + "Productos al Carrito")
            setItemAdded(true)
            onAdd(items)
        }
        
    }




    return(
        <div className="container d-flex justify-content-end align-items-center my-1">
            <div className="row m-1">
                    <div className="col">
                        <div className="btn-group">
                        <button  className="btn btn-primary" onClick={decrementarStock}>-</button>
                        <button  className="btn btn-primary">{items}</button>
                        <button  className="btn btn-primary" onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    {itemAdded ? <Link to ={"/cart"} className="btn btn-warning"> Terminar mi compra</Link> :
                    <button className="btn btn-warning" onClick={addtoCart}>Agregar al Carrito</button>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;