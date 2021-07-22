import * as React from "react";
import {Link} from "react-router-dom";

export const NavigationBar = () => (
    <nav>
        <Link to={"/quienesSomos"}>Quienes Somos </Link>
        <Link to={"/experiencias"}>Experiencias </Link>
        <Link to={"/reservas"}>Reservas </Link>
    </nav>
)