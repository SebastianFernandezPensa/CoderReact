
import facebook from "./img/facebook.svg"
import instagram from "./img/instagram.svg"
import whatsapp from "./img/whatsapp.svg"

const Footer = () => {
    return(
        <div className="contaienr my-5">
            <div className="row">
                <div className="col">
                    <a className="ms-3" href={"/"}> <img src={facebook} alt={"facebook"} width={"18"} /></a>
                    <a className="ms-3" href={"https://instagram.com/adnpalermo"}> <img src={instagram} alt={"instagram"} width={"18"} /></a>
                    <a className="ms-3" href={"https://wa.me/5491131675253"}> <img src={whatsapp} alt={"whatsapp"} width={"18"} /></a>
                </div>
            </div>
            <hr/>
            <div className="row">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href={"/"}>Politica de Privacidad</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={"/"}>Defensa del Consumidor</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={"/"}>Proteccion de datos personales</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href={"/"}>Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;