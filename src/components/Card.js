import React from "react";
import { Link } from "react-router-dom";

const Card = ({ recipe }) => {

    return (
        <Link to={`/recipes/${recipe.id}`} className="uk-link-reset">


            <div className="uk-card uk-card-muted">
                <div className="uk-card-media-top">
                    <img
                        src={recipe.link}
                        height="100"
                    />
                </div>
                <div className="uk-card-body">
                    <p id="category" className="uk-text-uppercase uk-text-large">
                        {recipe.title}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Card;