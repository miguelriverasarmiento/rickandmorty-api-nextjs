import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import GET_CHARACTERS from '../gql/queries/characters'
import {CharactersResponse} from '../types/characters-interface'
import client from '../gql/apollo-client'
import { useRouter } from "next/router";
import FindCharacter from '../components/find-character'

  const Characters: React.FC<{data: CharactersResponse}> = ({data}) => {
    const router = useRouter();

    return (
      <>
        <Head>
        <title>Rick and Morty</title>
        </Head>
        <FindCharacter />
        <div>
          <ul>
            {data.characters.results.map((character) => (
              <li onClick={() => router.push(`/character/${character.id}`)} key={character.id}>
                    {character.name}
              </li>
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
