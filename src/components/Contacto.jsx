
import logo from "./img/logoAdn.png";

const Contacto = () =>{
    return(
        <div className="container-fluid bg-dark-subtle py-3">
            <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={logo} alt={"AdnNutrition"} width={"123"} />
                        </div>
                        <div className="col-md-9 d-flex align-items-center ">
                            <div>
                                <h2>Contactate con nosotros</h2>
                                <p>
                                    Somos la empresa mas grande de Argentina, con mas de 30 años de experiencia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-end">
                <button className="btn bg-white">Contactanos</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contacto;