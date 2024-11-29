
import { GraphQLClient } from 'graphql-request';

type Pokemon = {
  id: string;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  image: string; 

};

type PokemonResponse = {
  pokemon_v2_pokemon: Pokemon[];
};

//Instantiate a GraphQL client
export const createGraphQLClient = (endpoint: string) => {
  return new GraphQLClient(endpoint);
};
export const BASE_URL = 'https://beta.pokeapi.co/graphql/v1beta';

export const fetchPokemons = async (): Promise<Pokemon[]> => {
  const client = createGraphQLClient(BASE_URL);
  
  const query = `
    query {
      pokemon_v2_pokemon(limit: 4, order_by: { weight: asc, height: desc }) {
        id
        name
        height
        weight
        base_experience
        pokemon_v2_pokemonabilities {
          pokemon_v2_ability {
            id
            name
            generation_id
            is_main_series
          }
        }
        pokemon_v2_encounters {
          pokemon_v2_locationarea {
            name
          }
        }
      }
    }
  `;
  
  try {
    const data = await client.request<PokemonResponse>(query);
    return data.pokemon_v2_pokemon.map((pokemon) => ({
      ...pokemon,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`,
    }));
  } catch (error) {
    throw new Error('Failed to fetch Pokémon data');
  }
};
