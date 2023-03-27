import {Character} from './characters-interface'
//import {Episode} from './episode-interfaces'
//import {Location} from './location-interfaces'

export interface CharacterFullData extends Character {
  origin: Location
  location: Location
  //episode: Episode[]
}