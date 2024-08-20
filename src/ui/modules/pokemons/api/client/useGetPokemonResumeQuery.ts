import { useQuery } from '@tanstack/react-query';

import { getPokemonResumeUseCase } from '../usecase/getPokemonResumeUseCase';

export function useGetPokemonResumeQuery({ pokemonName }) {
  return useQuery({
    queryKey: [pokemonName],
    queryFn: () => getPokemonResumeUseCase({ pokemonName }),
  });
}
