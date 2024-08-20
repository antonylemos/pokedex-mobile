import {
  IPokemonResumeDomain,
  IPokemonResumeResponse,
  IPokemonSpeciesResponse,
} from '../../entities/PokemonsList';
import { getPokemonResumeUseCase } from '../getPokemonResumeUseCase';

global.fetch = jest.fn();

const mockPokemonResponse: IPokemonResumeResponse = {
  id: 25,
  name: 'pikachu',
  types: [
    {
      slot: 1,
      type: {
        name: 'electric',
        url: 'https://pokeapi.co/api/v2/type/13/',
      },
    },
  ],
  species: {
    name: 'pikachu-species',
    url: 'https://pokeapi.co/api/v2/pokemon-species/25/',
  },
  sprites: {
    other: {
      'official-artwork': {
        front_default: 'https://pokeapi.co/media/sprites/pokemon/other/25.png',
      },
    },
  },
};

const mockSpeciesResponse: IPokemonSpeciesResponse = {
  egg_groups: [
    { name: 'field', url: 'https://pokeapi.co/api/v2/egg-group/3/' },
    { name: 'fairy', url: 'https://pokeapi.co/api/v2/egg-group/4/' },
  ],
};
describe('getPokemonResumeUseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return the correct Pokémon resume', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => mockPokemonResponse,
    });

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => mockSpeciesResponse,
    });

    const result: IPokemonResumeDomain = await getPokemonResumeUseCase({
      pokemonName: 'pikachu',
    });

    expect(result).toEqual({
      ...mockPokemonResponse,
      species: mockSpeciesResponse.egg_groups,
      sprite:
        mockPokemonResponse.sprites.other['official-artwork'].front_default,
    });
  });

  it('should throw an error on fetch fails', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Failed to fetch'));

    await expect(
      getPokemonResumeUseCase({ pokemonName: 'pikachu' }),
    ).rejects.toThrow('Failed to fetch');
  });
});
