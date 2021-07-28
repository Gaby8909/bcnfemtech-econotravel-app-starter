import * as React from "react";
import {Card} from "./Card";
import Montseny from "./assets/ciclismo.jpg";
import Montserrat from "./assets/montserratbig.jpg";


export const Cardsinfo = () => (
    <div className={"wrapper"}>
        <Card
            img={Montseny}
            title="Montseny en bici"
            description="Paseo en bicicleta por el Montseny"
        />
        <Card
            img={Barco}
            title="Paseo en barco"
            description="Descubre la costa en barco de vela"
        />
        <Card
            img={CasaBatlo}
            title="Casa Batlò"
            description="Descubre la Barcelona Modernista de noche"
        />
        <Card
            img={Huerto}
            title="Huerto en Barcelona"
            description="Del huerto a la mesa"
        />
        <Card
            img={Montserrat}
            title="Montserrat"
            description="Arte en la montaña sagrada"
        />
    </div>

)