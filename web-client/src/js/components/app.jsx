import * as React from "react";
import {NavigationBar} from "./navigationBar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {QuienesSomos} from "./quienesSomos";
import {Experiencias} from "./experiencias";
import {Reservas} from "./reservas";
import {ExperienceCarousel} from "./experienceCarousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-cool-form';
import {ReservasCompleted} from "./reservasCompleted";
import {Footer} from "./footer"

export const App = () => {
return <Router>
    <NavigationBar />
    <Switch>
     <Route path="/quienesSomos">
         <QuienesSomos />
     </Route>
     <Route path="/experiencias">
         <Experiencias />
     </Route>
     <Route path="/reservas">
             <Reservas />
     </Route>
        <Route exact path="/">
            <ExperienceCarousel />
        </Route>

    <Route path="/reservasCompleted">
        <ReservasCompleted />
    </Route>

    </Switch>
    <Footer />

    </Router>

}

