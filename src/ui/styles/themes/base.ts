import { fonts } from '../tokens/fonts';
import { background } from '../tokens/pokemonTypes';
import { spacings } from '../tokens/spacings';

export const base = {
  fonts,
  spacings,
  pokemonTypes: {
    background,
  },
} as const;
