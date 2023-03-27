import GET_CHARACTERS from '../../gql/queries/characters'
import GET_CHARACTER from '../../gql/queries/character'
import {GetServerSideProps} from 'next'
import {CharacterFullData} from '../../types/character-interface'
import {HeadContext} from '../../types/head-interface'
import {CharactersResponse} from '../../types/characters-interface'
import React, {useCallback, useMemo} from 'react'
import {useRouter} from 'next/router'
import client from '../../gql/apollo-client'

const Character: React.FC<{data: {character: CharacterFullData}}> = ({data}) => {

    const {gender, name, species, status} = data.character

    return(
        <div>
            <div>
            <p>{`Character name: ${name}`}</p>
            <p>{`Gender: ${gender}`}</p>
            <p>{`Species: ${species}`}</p>
            <p>{`Status (dead or alive): ${status}`}</p>
        
          </div>
        </div>
        )
    }

    export const getServerSideProps: GetServerSideProps = async (context) => {
        const {
          params: {id},
        } = context
    
      const {data} = await client.query<Promise<{character: CharacterFullData}>>({
        query: GET_CHARACTER,
        variables: {id: id || 1},
      })
    
      return {
        props: {data},
      }
    }

    export default Character
