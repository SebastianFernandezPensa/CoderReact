import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{

    const {addItem} = useContext (CartContext);

    const onAdd = (quantity) => {
        addItem (item,quantity);
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={item.thumbnail} alt={item.name} className="img-fluid" width={320} />
                </div>
                <div className="col">
                    <h2>{item.title}</h2>
                    <p >${item.price}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd}></ItemCount>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;