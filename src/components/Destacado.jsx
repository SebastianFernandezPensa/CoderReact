import destacado from "./img/destacada.webp"

const Destacado = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <img src={destacado} alt={"Destacado"} className="img-fluid"  />
                </div>
            </div>
        </div>
    )
}

export default Destacado ;