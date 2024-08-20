import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { IPokemonResumeDomain } from '../types/entities/PokemonDomain';

import { zustandStorage } from './utils/zustandStore';

type FavoritePokemonPersist = {
  pokemons: IPokemonResumeDomain[];
  favoritePokemon: (pokemon: IPokemonResumeDomain) => void;
  unfavoritePokemon: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

export const useFavoritePokemonStore = create<
  FavoritePokemonPersist,
  [['zustand/persist', FavoritePokemonPersist]]
>(
  persist(
    (set, get) => ({
      pokemons: [],
      favoritePokemon: (pokemon) => {
        set({ pokemons: [...get().pokemons, pokemon] });
      },
      unfavoritePokemon: (id) => {
        set({
          pokemons: get().pokemons.filter((pokemon) => pokemon.id !== id),
        });
      },
      isFavorite: (id) => get().pokemons.some((pokemon) => pokemon.id === id),
    }),
    {
      name: 'favorite-pokemon-storage',
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);
