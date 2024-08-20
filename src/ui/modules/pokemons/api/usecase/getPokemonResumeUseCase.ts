import {
  IPokemonResumeDomain,
  IPokemonResumeResponse,
  IPokemonSpeciesResponse,
} from '../entities/PokemonsList';

export async function getPokemonResumeUseCase({
  pokemonName,
}): Promise<IPokemonResumeDomain> {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
  );
  const pokemon = (await response.json()) as IPokemonResumeResponse;

  const species = await fetch(pokemon.species.url);
  const { egg_groups } = (await species.json()) as IPokemonSpeciesResponse;

  return {
    ...pokemon,
    species: egg_groups,
    sprite: pokemon.sprites.other['official-artwork'].front_default,
  };
}
