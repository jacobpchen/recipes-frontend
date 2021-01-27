import React, { useEffect } from "react";

import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav"

import Recipes from './containers/Recipes'
import Recipe from './containers/Recipe'
import Login from './containers/Login'
import Signup from './containers/Signup'
import UserInfo from './containers/UserInfo'
import Category from './category/category'
import lightTheme from './theme/light';
import darkTheme from './theme/dark';
import Container from "./theme/component/Container"
import Post from './containers/PostRecipe'
import { darkModeAction } from './actions/config_action';

function App() {

    const dispatch = useDispatch();
    const config = useSelector(state => state.config)

    useEffect(() => {
        if (!config.darkMode) {
            dispatch(darkModeAction(window.localStorage.getItem('theme')))
        }
    }, [config.darkMode, dispatch])

    return (
        <ThemeProvider theme={config.darkMode === "light" ? lightTheme : darkTheme}>
            <Container>
                <div className="App">
                    <Nav />
                    <Switch>
                        <Route path="/" component={Recipes} exact />
                        <Route path="/recipes/:id" component={Recipe} exact />
                        <Route path="/login" component={Login} exact />
                        <Route path="/post" component={Post} exact />
                        <Route path="/signup" component={Signup} exact />
                        <Route path="/userinfo/:id" component={UserInfo} exact />
                        <Route path="/categories/:id" component={Category} exact />
                    </Switch>
                </div>
            </Container>
        </ThemeProvider>
    );
}

export default App;