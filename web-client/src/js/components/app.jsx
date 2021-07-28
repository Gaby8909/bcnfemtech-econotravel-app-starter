import * as React from "react";
import {NavigationBar} from "./navigationBar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {QuienesSomos} from "./quienesSomos";
import {Experiencias} from "./experiencias";
import {Reservas} from "./reservas";
import {ExperienceCarousel} from "./experienceCarousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Card} from "./Card";
import {Cardsinfo} from "./Cardsinfo"

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
        {/*<Route exact path="/">*/}
        {/*    <Card />*/}
        {/*</Route>*/}
        {/*<Route exact path="/">*/}
        {/*    <Cardsinfo />*/}
        {/*</Route>*/}
        <div className={"cards"}>
            <Card />
            <Cardsinfo />
        </div>
    </Switch>

    </Router>

}

