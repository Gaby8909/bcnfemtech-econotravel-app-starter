import * as React from "react";
import {NavigationBar} from "./navigationBar"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {QuienesSomos} from "./quienesSomos";
import {Experiencias} from "./experiencias";
import {Reservas} from "./reservas";

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
    </Switch>
    </Router>

}
