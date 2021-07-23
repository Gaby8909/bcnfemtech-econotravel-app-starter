import * as React from "react";
import {Link} from "react-router-dom";
import logo from "./assets/logo-transparente.png";

export const NavigationBar = () => (
    <nav className={"navigationBar"}>
        <div className={"logoImg"}>
            <a><Link to={"/app"}> <img src={logo} alt={""} /> </Link></a>
        </div>
        <div className={"itemsLinks"}>
        <Link to={"/quienesSomos"}>Quienes Somos </Link>
        <Link to={"/experiencias"}>Experiencias </Link>
        <Link to={"/reservas"}>Reservas </Link>
        </div>
    </nav>
)