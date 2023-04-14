import React, {useCallback} from 'react'
//import styled from 'styled-components'
import {Character} from '../types/characters-interface'
import {useRouter} from 'next/router'

const CharacterCard: React.FC<Character> = ({gender, image, name, species, status, id}) => {
  const router = useRouter()

  const onClick = useCallback(() => {
    router.push(`/character/${id}`)
  }, [router, id])

  return (
    <div onClick={onClick}>
      <div>
        <p>Name: {name}</p>
        <p>Gender: {gender}</p>
        <p>Status: {status}</p>
        <p>Species: {species}</p>
      </div>
    </div>
  )
}

export default CharacterCard
