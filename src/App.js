import React from "react";

import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav"
import Recipes from './containers/Recipes'
import Recipe from './containers/Recipe'
import Category from './category/category'

function App() {
    return (
        <div className="App">
            <Nav />
            <Switch>
                <Route path="/" component={Recipes} exact />
                <Route path="/recipes/:id" component={Recipe} exact />
                <Route path="/categories/:id" component={Category} exact />
            </Switch>
        </div>
    );
}

export default App;