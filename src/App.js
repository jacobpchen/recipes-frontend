import React, {useEffect} from "react";

import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav"
import Recipes from './containers/Recipes'
import Recipe from './containers/Recipe'
import Category from './category/category'

import lightTheme from './theme/light';
import darkTheme from './theme/dark';
import Container from "./theme/component/Container"
import {ThemeProvider} from "styled-components";
import { darkModeAction } from './actions/config_action';

import { useSelector, useDispatch } from "react-redux";


function App() {
    const dispatch = useDispatch();
    const config = useSelector(state => state.config)
  
    useEffect(() => {
      if (!config.darkMode) {
        dispatch(darkModeAction(window.localStorage.getItem('theme')))
      }
    }, [config.darkMode, dispatch])

    const themeChange = (value) => {
        window.localStorage.setItem('theme', value)
        dispatch(darkModeAction(value))
      }
    
    return (
         <ThemeProvider theme={config.darkMode === "light" ? lightTheme : darkTheme}>
             <Container>
            <Nav />
            <Switch>
                <Route path="/" component={Recipes} exact />
                <Route path="/recipes/:id" component={Recipe} exact />
                <Route path="/categories/:id" component={Category} exact />
            </Switch>
            
            <div class="mode">
            <button onClick={()=>themeChange('dark')}>Dark Mode</button>
            <button onClick={()=>themeChange('light')}>Light Mode</button>
            </div>
            </Container>
        </ThemeProvider>
    );
}

export default App;