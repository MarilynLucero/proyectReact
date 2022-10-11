import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import ImagenLogo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";


export const NavBar = ()=>{

    return(
        <nav className="navegacion">
            <Link to="/inicio">
                <img className="imagenLogo" src={ImagenLogo} alt="logo" />
            </Link>
            <div className="list">
                <Link to="/">Inicio</Link>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to="/vinos/tinto"> Tintos</NavLink>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to="/vinos/blanco"> Blancos</NavLink>
                <NavLink className={({isActive})=>isActive === true ? 'claseActiva' : 'claseInactiva'} to="/vinos/rosado"> Rosados</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}