const Item = ({item}) => {
    return(
        
            <div className="card">
                <img src={item.thumbnail} className="card-img-top" alt={item.title}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text"><b>${item.price}</b></p>
                    </div>
                </div>
    
    )
}

export default Item;