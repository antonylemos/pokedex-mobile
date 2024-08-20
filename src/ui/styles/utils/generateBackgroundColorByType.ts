import { background } from '../tokens/pokemonTypes';

export function generateBackgroundColorByType(type: string): string {
  return background[type];
}
