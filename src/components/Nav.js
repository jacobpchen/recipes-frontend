import React, { useContext } from "react";
import Query from "./Query";
import { Link } from "react-router-dom";
import { UserContext } from '../context/UserContext'

import CATEGORIES_QUERY from "../Queries/categories";

const Nav = () => {

    const { user, setUser } = useContext(UserContext)

    return (
        <div>
            <Query query={CATEGORIES_QUERY} id={null}>
                {({ data: { categories } }) => {
                    return (
                        <div>
                            <nav className="uk-navbar-container" data-uk-navbar>
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
                                                        className="uk-link-reset"
                                                    >
                                                        {category.name}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    );
                }}
            </Query>
        </div>
    );
};

export default Nav;