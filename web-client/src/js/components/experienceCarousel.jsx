import * as React from "react";
import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import Montseny from "./assets/ciclismo.jpg";
import Barco from "./assets/sail-boat.jpg";
import CasaBatlo from "./assets/palau.jpg";
import Huerto from "./assets/huertofamilia.jpg";
import Montserrat from "./assets/montserratbig.jpg"

export const ExperienceCarousel = () => (
    <div className="carouselContainer" >
       <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src= {Montseny}
                    alt="Slide Montseny"
                />
                <Carousel.Caption>
                    <h3>Montseny en bici</h3>
                    <p>Paseo en bicicleta por el Montseny</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src= {Barco}
                    alt="Slide barco"
                />

                <Carousel.Caption>
                    <h3>Paseo en barco</h3>
                    <p>Descubre la costa en barco de vela</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={CasaBatlo}
                    alt="Slide casa batlo"
                />

                <Carousel.Caption>
                    <h3>Casa Batlò</h3>
                    <p>
                        Descubre la Barcelona Modernista de noche
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src= {Huerto}
                    alt="Slide huerto"
                />
                <Carousel.Caption>
                    <h3>Huerto en Barcelona</h3>
                    <p>Del huerto a la mesa</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src= {Montserrat}
                    alt="Slide Montserrat"
                />
                <Carousel.Caption>
                    <h3>Montserrat</h3>
                    <p>Arte en la montaña sagrada</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    </div>
)
