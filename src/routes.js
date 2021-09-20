import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./pages/home";
import Detalhes from "./pages/detalhes";


const Routes = ()=>{

    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/detals" exact component={Detalhes}/>
        </Switch>    
    </BrowserRouter>
);

};


export default Routes;