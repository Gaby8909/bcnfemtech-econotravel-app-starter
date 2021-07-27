import * as React from "react";

import Marina from "./assets/marina.jpg"

export const QuienesSomos = () => {
    return (
        <section>
        <div className={"infoEco"} >
        <h1>Econotravel: Experiencias en el área de Barcelona</h1>
            <h4>Misión</h4>
            <p>Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, Marina Herrán, realizó en bicicleta por Cataluña en el verano de 2001. Durante ese periodo, descubrió que las opciones turísticas que ofrecían ciudades como Barcelona, Girona y Reus dependían de transportes contaminantes y actividades poco respetuosas con la naturaleza y el entorno, algo que causaba un progresivo deterioro de los increíbles parajes naturales de Cataluña.

                Preocupada por la falta de alternativas eco-friendly, Marina se propuso fundar una agencia de experiencias turísticas donde el respeto por la naturaleza fuera la principal prioridad. Así nació Econotravel Barcelona.
            </p>

            <div className={"infoImage"}>
                <img className={"infoMarina"} src={Marina} alt="imgFounder" />
                <p><h5>Marina Herrán, fundadora de Econotravel</h5></p>
            </div>

            <div className={"infoContacto"}>
                <h4>Contacto</h4>
                <p><h6>Teléfono:</h6> 93 000 00 00</p>
                <p><h6>Correo:</h6> info@econotravel.com</p>
                <p><h6>Dirección:</h6> Carrer dels Viatgers, 28, 08000 Barcelona</p>
            </div>

        </div>
        </section>

    )
}