import logoCarrito from "./img/cart-fill.svg";

const CarWildget = () => {
    return(
        <button type="button" className="btn btn-primary position-relative">
            <img src={logoCarrito} alt={"Carrito"} width={"25"} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
}

export default CarWildget;