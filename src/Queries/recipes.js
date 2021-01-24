import gql from "graphql-tag";

const RECIPES_QUERY = gql`
  query Recipes {
    recipes {
      id
      title
      categories {
        id
        name
      }
      instructions
    ingredients
    }
  }
`;

export default RECIPES_QUERY;