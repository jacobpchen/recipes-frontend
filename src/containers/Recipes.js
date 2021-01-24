import React from "react";
import Recipe from '../components/Recipes'
import Query from '../components/Query'
import RECIPES_QUERY from '../Queries/recipes'

const Home = () => {
    return (
        <div>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <h1>Recipes</h1>
                    <Query query={RECIPES_QUERY}>
                        {({ data: { recipes } }) => {
                            { console.log("Inside RECIPES") }
                            return <Recipe recipes={recipes} />;
                        }}
                    </Query>
                </div>
            </div>
        </div>
    );
};

export default Home;