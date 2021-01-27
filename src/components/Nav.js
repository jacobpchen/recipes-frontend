import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../context/UserContext'
import { darkModeAction } from '../actions/config_action'
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import Query from "./Query";
import CATEGORIES_QUERY from "../Queries/categories";

import Container from '../theme/component/Container'
import lightTheme from '../theme/light';
import darkTheme from '../theme/dark';

const Nav = () => {

    const { user, setUser } = useContext(UserContext)
    const config = useSelector(state => state.config)
    const dispatch = useDispatch();
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
        <div>
            <ThemeProvider theme={config.darkMode === "light" ? lightTheme : darkTheme}>
                <Container>
                    <Query query={CATEGORIES_QUERY} id={null}>
                        {({ data: { categories } }) => {
                            return (
                                <div>
                                    <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
                                        <div className="uk-navbar-left">
                                            <ul className="uk-navbar-nav">
                                                <li>
                                                    <Link to="/">Recipes</Link>
                                                </li>
                                                {user &&
                                                    <li>
                                                        <Link to="/post">Post</Link>
                                                    </li>
                                                }
                                                {user &&
                                                    <li>
                                                        <Link to={`/userinfo/${user.user.id}`}>{user.user.username}</Link>
                                                    </li>
                                                }
                                                {user &&
                                                    <li>
                                                        <Link to="/login" onClick={(event) => {
                                                            setUser(null)
                                                        }} >Logout</Link>

                                                    </li>
                                                }
                                                {!user &&
                                                    <li>
                                                        <Link to="/login">Login</Link>
                                                    </li>
                                                }
                                                {!user &&
                                                    <li>
                                                        <Link to="/signup">Signup</Link>
                                                    </li>
                                                }

                                            </ul>
                                        </div>

                                        <div className="uk-navbar-right">
                                            <ul className="uk-navbar-nav">
                                                {categories.map((category, i) => {
                                                    return (
                                                        <li key={category.id}>
                                                            <Link
                                                                to={`/categories/${category.id}`}
                                                                className="uk-link-reset">
                                                                {category.name}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </nav>
                                    <ul class="uk-subnav uk-margin" >
                                        <li><a onClick={() => themeChange('dark')}>Dark Mode</a></li>
                                        <li><a onClick={() => themeChange('light')}>Light Mode</a></li>
                                    </ul>
                                </div>
                            );
                        }}
                    </Query>
                </Container>
            </ThemeProvider>
        </div>
    );
};



export default Nav;