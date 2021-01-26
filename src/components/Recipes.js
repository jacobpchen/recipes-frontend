import React from "react";
import Card from './Card'

const Recipe = ({ recipes }) => {
    const leftRecipeCount = Math.ceil(recipes.length / 5);
    const leftRecipe = recipes.slice(0, leftRecipeCount);
    const rightRecipe = recipes.slice(leftRecipeCount, recipes.length);
    console.log(recipes)

    return (
        <div>
            <div className="uk-child-width-1-2" data-uk-grid>
                <div>
                    {leftRecipe.map((recipe, i) => {
                        return <Card recipe={recipe} key={`recipe__${recipe.id}`} />;
                    })}
                </div>
                <div>
                    <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
                        {rightRecipe.map((recipe, i) => {
                            return <Card recipe={recipe} key={`recipe__${recipe.id}`} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;