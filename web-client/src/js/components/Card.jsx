import * as React from "react";

export const Card = (props) => (

        <div className={"card"}>
            <div className={"card__body"}>
                <img src={props.img}/>
                <h2 className={"card__title"}>{props.title}
                </h2>
                <p className={"card__description"}>{props.description}
                </p>
                <button className={"card-btn"}>Ver experiencia
                </button>
            </div>
        </div>
    )
