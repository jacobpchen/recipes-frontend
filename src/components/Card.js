import React from "react";
import { Link } from "react-router-dom";

const Card = ({ recipe }) => {

    const getImage = () => {
        /* console.log("hi")
        console.log(recipe)
        console.log(recipe.image)
        const path = "http://localhost:1337"
        recipe.image.map(data => {
            console.log(data.url)
            console.log(path + data.url)
            return path + data.url
        }) */
        console.log("INSIDE GET IMAGE")
        console.log(recipe.link)
        return recipe.link
    }

    return (
        <Link to={`/recipes/${recipe.id}`} className="uk-link-reset">


            <div className="uk-card uk-card-muted">
                <div className="uk-card-media-top">
                    <img
                        src={getImage()}
                        height="100"
                    />
                </div>
                <div className="uk-card-body">
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