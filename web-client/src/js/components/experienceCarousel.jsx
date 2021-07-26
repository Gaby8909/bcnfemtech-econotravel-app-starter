import * as React from "react";
import {Carousel} from "react-responsive-carousel"
import image from '"./assets/tour-bici-montseny.jpg"'

export const ExperienceCarousel = (props) => (

    const experiences = props.experiences;

    // <Carousel autoPlay>
    //     { experiences.map (e => <div>
    //         <img src={e.image}/>
    //         <p className={"legend"}>{e.name}</p>
    //     </div>)}
    // </Carousel>
    <Carousel autoPlay>
        <div>
            <img src={image} alt="" />
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
