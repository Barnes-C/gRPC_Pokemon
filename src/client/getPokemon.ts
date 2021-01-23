import { Pokemon, PokemonRequest } from '../proto/pokemon_pb';
import { PokemonNotFoundError } from '../server/error';
import { client } from './connection';

export const getPokemon = async (id: number) => {
  return new Promise<Pokemon>((resolve, reject) => {
    const request = new PokemonRequest();
    request.setId(id);

    client.getPokemon(request, (err: Error, pokemon: Pokemon) => {
      if (err) reject(err);
      else resolve(pokemon);
    });
  }).catch((err: PokemonNotFoundError) => {
    throw err;
  });
};
