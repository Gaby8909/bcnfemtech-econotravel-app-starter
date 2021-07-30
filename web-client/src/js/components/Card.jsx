import * as React from "react";
import {Link} from "react-router-dom";

export function Card({imgSrc, title, description, precio, duracion, accesibilidad, etiquetas}) {
        return(

        <div className={"card"}>
            <div className={"card__body"}>
                <img className={"card__image"} src={imgSrc} alt=""/>
                <h3 className={"card__title"}>{title}</h3>
                {/*<p className={"card__description"}>{description}</p>*/}
                <p className={"card__price"}>Precio: {precio} € por persona</p>
                <p className="card__duracion">Duracion: {duracion}</p>
                <p className="card__accesibilidad">Accesibilidad: {accesibilidad}</p>
                <p className="card__etiquetas">{etiquetas}</p>
                <Link to={"/reservas"}><button  className={"card-btn"} >Reserva ya</button></Link>
            </div>
        </div>
    )
}
