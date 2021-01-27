import React from "react";
import Recipe from '../components/Recipes'
import Query from '../components/Query'
import RECIPES_QUERY from '../Queries/recipes'
import Container from '../theme/component/Container'
import styled from 'styled-components'
const Home = () => {

    return (
        <Container>
            <div className="uk-section">
                <div className="uk-container uk-container-large">
                    <Pheading>Recipes</Pheading>
                    <Query query={RECIPES_QUERY}>
                        {({ data: { recipes } }) => {
                            return <Recipe recipes={recipes} />;
                        }}
                    </Query>
                </div>
            </div>
        </Container>
    );
};

export default Home;

const Pheading = styled.p`
font-family: Staatliches;
    font-size: 120px;
`

