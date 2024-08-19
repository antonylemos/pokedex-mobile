import {
  IPokemonsListDomain,
  IPokemonsListResponse,
} from '../entities/PokemonsList';

export async function getPokemonsUseCase({
  pageParam,
  limit = 10,
}): Promise<IPokemonsListDomain> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${pageParam}&limit=${limit}`,
  );
  const { results } = (await response.json()) as IPokemonsListResponse;

  return {
    offset: pageParam + limit,
    results,
  };
}
