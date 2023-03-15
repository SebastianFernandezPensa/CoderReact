import CarWildget from "./CarWildget";
import logo from "./img/logoAdn.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}><img src={logo} alt="AdnNutrition" width={"110"} /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={"/"}>Productos </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/proteinas"}>Proteinas </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/category/cratinas"}>Creatinas </NavLink>
                        </li>
                    </ul>
                </div>
                </div>
                </nav>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CarWildget/>
                </div>
            </div>
        </div>
    )
}

export default NavBar;