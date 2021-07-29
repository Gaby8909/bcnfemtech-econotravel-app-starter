import * as React from "react";

export function Card({imgSrc, title, description, precio, duracion, accesibilidad, etiquetas}) {
        return(
            <div className={"wrapper"}>
        <div className={"card"}>
            <div className={"card__body"}>
                <img className={"card__image"} src={imgSrc} alt=""/>
                <h3 className={"card__title"}>{title}</h3>
                <p className={"card__description"}>{description}</p>
                <h4 className={"card__price"}>Precio: {precio} € por persona</h4>
                <h6 className="card__duracion">Duracion: {duracion}</h6>
                <h6 className="card__accesibilidad">Accesibilidad: {accesibilidad}</h6>
                <p className="card__etiquetas">{etiquetas}</p>
                <button className={"card-btn"}>Ver experiencia</button>
            </div>
        </div>
            </div>
    )
}
