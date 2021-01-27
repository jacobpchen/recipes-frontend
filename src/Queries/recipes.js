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
      link
      instructions
    ingredients
    views
    }
  }
`;

export default RECIPES_QUERY;