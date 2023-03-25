import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import GET_CHARACTERS from '../gql/queries/characters'
import {CharactersResponse} from '../types/characters-interface'
//import CharacterCard from '../components/AllCharacters'
import client from '../gql/apollo-client'

  const Characters: React.FC<{data: CharactersResponse}> = ({data}) => {
  
    return (
      <>
        <Head>
        <title>Rick and Morty</title>
        </Head>
        <div>
          <ul>
            {data.characters.results.map((character) => (
              <li key={character.id}>{character.name}</li>
            ))}
          </ul>
        </div>
      </>
    )
  }

  export async function getServerSideProps() {
  
    const {data} = await client.query<Promise<CharactersResponse>>({
      query: GET_CHARACTERS,
    })
  
    return {
      props: {data},
    }
  }

  export default Characters
