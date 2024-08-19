import { IPokemonsListResponse } from '../../entities/PokemonsList';
import { getPokemonsUseCase } from '../getPokemonsUseCase';

global.fetch = jest.fn();

describe('getPokemonsUseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch Pokemons and return formatted data', async () => {
    const mockResponse: IPokemonsListResponse = {
      count: 1118,
      next: 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=10',
      previous: null,
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      ],
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const pageParam = 0;
    const limit = 10;

    const result = await getPokemonsUseCase({ pageParam, limit });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `https://pokeapi.co/api/v2/pokemon?offset=${pageParam}&limit=${limit}`,
    );

    expect(result).toEqual({
      offset: pageParam + limit,
      results: mockResponse.results,
    });
  });

  it('should apply default limit of 10 if not provided', async () => {
    const mockResponse: IPokemonsListResponse = {
      count: 1118,
      next: 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=10',
      previous: null,
      results: [
        { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
        { name: 'ivysaur', url: 'https://pokeapi.co/api/v2/pokemon/2/' },
      ],
    };

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const pageParam = 20;

    const result = await getPokemonsUseCase({ pageParam });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `https://pokeapi.co/api/v2/pokemon?offset=${pageParam}&limit=10`,
    );

    expect(result).toEqual({
      offset: pageParam + 10,
      results: mockResponse.results,
    });
  });

  it('should handle fetch errors', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Fetch failed'));

    const pageParam = 0;

    await expect(getPokemonsUseCase({ pageParam })).rejects.toThrow(
      'Fetch failed',
    );
  });
});
