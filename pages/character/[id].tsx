import GET_CHARACTER from '../../gql/queries/character'
import {GetServerSideProps} from 'next'
import {Character} from '../../types/characters-interface'
import client from '../../gql/apollo-client'
import Image from 'next/image'

const Character: React.FC<{data: {character: Character}}> = ({data}) => {

    const {gender, name, species, type, status, image} = data.character

    return(
        <div>
            <Image
              style={{
                borderRadius: '8px',
              }}
              src={image}
              alt='character image'
              width={300}
              height={300}
            />
            <div>
            <p>{`Character name: ${name}`}</p>
            <p>{`Gender: ${gender}`}</p>
            <p>{`Species: ${species}`}</p>
            <p>{`Type: ${type}`}</p>
            <p>{`Status (dead or alive): ${status}`}</p>
        
          </div>
        </div>
        )
    }

    export const getServerSideProps: GetServerSideProps = async (context) => {
        const {
          params: {id},
        } = context
    
      const {data} = await client.query<Promise<{character: Character}>>({
        query: GET_CHARACTER,
        variables: {id: id || 1},
      })
    
      return {
        props: {data},
      }
    }

    export default Character
