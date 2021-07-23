import * as React from "react";
import {Carousel} from "react-responsive-carousel"


export const ExperienceCarousel = () => (

    <Carousel autoPlay>
        <div>
            <img src={"web-client/src/js/components/assets/tour-bici-montseny.jpg"} alt="" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img alt="" src="" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img alt="" src="" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img alt="" src="" />
            <p className="legend">Legend 4</p>
        </div>
        <div>
            <img alt="" src="" />
            <p className="legend">Legend 5</p>
        </div>
        <div>
            <img alt="" src="" />
            <p className="legend">Legend 6</p>
        </div>
        <div>
            <img alt="" src="" />
            <p className="legend">Legend 7</p>
        </div>
        <div>
            <img alt="" src="" />
            <p className="legend">Legend 8</p>
        </div>
        <div>
            <img alt="" src="" />
            <p className="legend">Legend 9</p>
        </div>


    </Carousel>
);
