import { useInfiniteQuery } from '@tanstack/react-query';

import { getPokemonsUseCase } from '../usecase/getPokemonsUseCase';

export function useGetPokemonsQuery() {
  return useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemonsUseCase,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.offset,
  });
}
