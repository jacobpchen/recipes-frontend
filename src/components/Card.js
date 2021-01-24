import React from "react";
import { Link } from "react-router-dom";

const Card = ({ recipe }) => {
    console.log(recipe)
    const imageUrl = 'https://placekitten.com/700/300'
    return (
        <Link to={`/recipes/${recipe.id}`} className="uk-link-reset">
            <div className="uk-card uk-card-muted">
                <div className="uk-card-media-top">
                    <img
                        src={imageUrl}
                        height="100"
                    />
                </div>
                <div className="uk-card-body">
                    {console.log("INSIDE CARD - BODY")}
                    {console.log(recipe)}
                    <p id="category" className="uk-text-uppercase uk-text-large">
                        {recipe.title}
                    </p>
                    {/* <p id="title" className="uk-text-large">
                        {recipe.title}
                    </p> */}
                </div>
            </div>
        </Link>
    );
};

export default Card;