import React from "react";
import Query from "./Query";
import { Link } from "react-router-dom";

import CATEGORIES_QUERY from "../Queries/categories";

const Nav = () => {
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
                                    </ul>
                                </div>

                                <div className="uk-navbar-right">
                                    {console.log(categories)}

                                    <ul className="uk-navbar-nav">

                                        {categories.map((category, i) => {
                                            return (
                                                <li key={category.id}>
                                                    {console.log(category.id)}
                                                    {console.log(category.name)}
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