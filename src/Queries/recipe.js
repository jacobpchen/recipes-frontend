import gql from "graphql-tag";

const RECIPE_QUERY = gql`
query Recipes($id:ID!){
  recipe(id: $id){
    id
    title
    instructions
    ingredients
    link
  }
  categories {
      id
      name
  }

}
`;

export default RECIPE_QUERY;