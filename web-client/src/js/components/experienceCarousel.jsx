import * as React from "react";
import {Carousel} from "react-responsive-carousel"


export const ExperienceCarousel = () => (

    <Carousel autoPlay>
        <div>
            <img src={".assets/tour-bici-montseny.jpg"} alt="" />
            <p className="legend"> Paseo en bicicleta por el Montseny</p>
        </div>
        <div>
            <img alt="" src="./assets/barco.jpg" />
            <p className="legend">Descubre la costa en barco de vela</p>
        </div>
        <div>
            <img alt="" src="./assets/casa-batllo.jpg" />
            <p className="legend">Descubre la Barcelona Modernista de noche</p>
        </div>
        <div>
            <img alt="" src="./assets/huerto.jpg" />
            <p className="legend">Del huerto a la mesa</p>
        </div>
        <div>
            <img alt="" src="./assets/montserrat.jpg" />
            <p className="legend">Arte en la montaña sagrada</p>
        </div>


    </Carousel>
);
