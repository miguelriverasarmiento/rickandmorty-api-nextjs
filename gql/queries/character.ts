import {gql} from '@apollo/client'

const GET_CHARACTER = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      image
    }
  }
`
export default GET_CHARACTER
