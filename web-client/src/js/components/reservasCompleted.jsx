import * as React from "react";
import {Link} from "react-router-dom";
import {Button} from "reservas"

export const ReservasCompleted = () => <div className={"completedFormMsg"}>

    <h1>¡Gracias por la reserva!</h1>
    <a><Link to={"/reservas"}> Go back to <span className={"homeswitch"}>Reservas</span> </Link></a>

</div>