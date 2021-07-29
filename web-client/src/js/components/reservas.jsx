import * as React from "react";
import { useForm } from "react-cool-form";
import {Link} from "react-router-dom";


    export const Reservas = () => {

            const {form, getState} = useForm({
            defaultValues: {name: "", email: "", phone: ""},
            onSubmit: (values) => console.log("onSubmit: ", values),
        });
        const errors = getState("errors", {filterUntouchedError: true});

        return (
            <section className="bodyForm">

              <div className="reservaForm">
                  <h1>Haz aquí tu reserva</h1>
              </div>
            <form ref={form} noValidate>
                <div className="divForm">
                    {/* Support built-in validation */}
                    <input name="name" placeholder="Name" required/>
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className="divForm">
                    <input name="email" type="email" placeholder="Email" required/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="divForm">
                    <input name="phone" type="phone" placeholder="Phone" required/>
                    {errors.phone && <p>{errors.phone}</p>}
                </div>
                <fieldset>
                    <select className="formDesplegable" type="text" tabIndex="4" required id="experiencia"
                            name="experiencia">
                        <option value={"experiencia"}> Elige tu experiencia</option>
                        <option value="1"> Montseny en bici -- 150€ --</option>
                        <option value="1"> Paseo en barco -- 180€ --</option>
                        <option value="1"> Barcelona modernista -- 100€ --</option>
                        <option value="1"> Huerto en Barcelona -- 50€ --</option>
                        <option value="1"> Visita a Montserrat -- 145€ --</option>
                    </select>
                </fieldset>
                <fieldset>
                    <select className="formDesplegable" type="text" tabIndex="4" required id="experiencia"
                            name="experiencia">
                        <option select value={"experiencia"}> Número de personas</option>
                        <option value="1"> 1</option>
                        <option value="1"> 2</option>
                        <option value="1"> 3</option>
                        <option value="1"> 4</option>
                        <option value="1"> 5</option>
                        <option value="1"> 6</option>
                    </select>
                </fieldset>
                <fieldset>
                    <textarea className="formTarea" placeholder="Escribe aquí tu mensaje...." tabIndex="5" required></textarea>
                </fieldset>
                <fieldset>
                  <Link to={"/reservasCompleted"}>  <button className="formButton" name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button> </Link>

                </fieldset>

            </form>

            </section>
        )
    }