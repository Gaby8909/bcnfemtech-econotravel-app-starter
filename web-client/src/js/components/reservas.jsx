import * as React from "react";

export const Reservas  = () =>
    <section>

    <div className="infoForm">
        <form id="contact" action="" method="post">
            <h3>Formulario de reserva</h3>
            <h4>Haz tu reserva aquí</h4>
            <fieldset>
                <input placeholder="Nombre" type="text" tabIndex="1" required autoFocus />
            </fieldset>
            <fieldset>
                <input placeholder="Dirección e-mail" type="email" tabIndex="2" required />
            </fieldset>
            <fieldset>
                <input placeholder="Teléfono de contacto" type="tel" tabIndex="3" required />
            </fieldset>
            <fieldset>
                <select class="desplegable" type="text" tabIndex="4" required id="experiencia" name="experiencia">
                    <option value={"experiencia"}> Elige tu experiencia </option>
                    <option value="1"> Montseny en bici -- 150€ --  </option>
                    <option value="1"> Paseo en barco -- 180€ -- </option>
                    <option value="1"> Barcelona modernista -- 100€ -- </option>
                    <option value="1"> Huerto en Barcelona -- 50€ -- </option>
                    <option value="1"> Visita a Montserrat -- 145€ -- </option>
                </select>
            </fieldset>
            <fieldset>
                <select class="desplegable" type="text" tabIndex="4" required id="experiencia" name="experiencia">
                    <option select value={"experiencia"}> Número de personas </option>
                    <option value="1"> 1 </option>
                    <option value="1"> 2 </option>
                    <option value="1"> 3 </option>
                    <option value="1"> 4 </option>
                    <option value="1"> 5 </option>
                    <option value="1"> 6 </option>
                </select>
            </fieldset>

            <fieldset>
                <textarea placeholder="Escribe tu mensaje aquí...." tabIndex="5" required></textarea>
            </fieldset>

            <fieldset>
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
            </fieldset>

        </form>
    </div>


</section>
