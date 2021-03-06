import gql from 'graphql-tag';

const CATEGORY_ARTICLES_QUERY = gql`
query Category($id:ID!){
  category(id: $id){
    name
    recipes{
        id
      title
      ingredients
      instructions
      link
    }
  }
}
`;

export default CATEGORY_ARTICLES_QUERY;