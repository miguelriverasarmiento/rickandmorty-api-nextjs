import {GetServerSideProps} from 'next'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import GET_CHARACTERS from '../gql/queries/characters'
import {CharactersResponse} from '../types/characters-interface'
import client from '../gql/apollo-client'
import { useRouter } from "next/router";
import FindCharacter from '../components/find-character'
import Pagination from '../components/pagination'


  const Characters: React.FC<{data: CharactersResponse}> = ({data}) => {
    const {next, pages, prev, count} = data.characters.info
    const router = useRouter()
    const pathname = router.pathname

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
        <Pagination count={count} next={next} prev={prev} pages={pages} router={router} pathname={pathname} />

      </>
    )
  }

  export const getServerSideProps: GetServerSideProps = async (context) => {
    const {
      query: {page},
    } = context
  
    const {data} = await client.query<Promise<CharactersResponse>>({
      query: GET_CHARACTERS,
      variables: {page: +page || 1},
    })
  
    return {
      props: {data},
    }
  }

  export default Characters
