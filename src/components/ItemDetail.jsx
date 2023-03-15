const ItemDetail = ({item}) =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={item.thumbnail} alt={item.name} className="img-fluid" width={320} />
                </div>
                <div className="col">
                    <h2>{item.title}</h2>
                    <p >${item.price}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;