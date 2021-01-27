import React from "react";
import { useParams } from "react-router";
import styled from 'styled-components'
import Recipes from "../components/Recipes";
import Query from "../components/Query";

import CATEGORY_RECIPES_QUERY from '../Queries/category'

const Category = () => {
    let { id } = useParams();

    return (
        <Query query={CATEGORY_RECIPES_QUERY} id={id}>
            {({ data: { category } }) => {
                return (
                    <div>
                        <div className="uk-section">
                            <div className="uk-container uk-container-large">
                                <Pheading>{category.name}</Pheading>
                                <Recipes recipes={category.recipes} />
                            </div>
                        </div>
                    </div>
                );
            }}
        </Query>
    );
};

const Pheading = styled.p`
font-family: Staatliches;
    font-size: 120px;
`

export default Category;