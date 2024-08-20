import { IBaseDomain, IBaseResponse } from '@/app/types/api/Base';

export interface IPokemonsList {
  name: string;
  url: string;
}

export interface IPokemonsListResponse extends IBaseResponse<IPokemonsList> {}

export interface IPokemonsListDomain extends IBaseDomain<IPokemonsList> {}

export interface IPokemonResumeResponse {
  id: number;
  name: string;
  species: {
    name: string;
    url: string;
  };
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    },
  ];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

export interface IPokemonResumeDomain {
  id: number;
  name: string;
  species: {
    name: string;
    url: string;
  }[];
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    },
  ];
  sprite: string;
}

export interface IPokemonSpeciesResponse {
  egg_groups: {
    name: string;
    url: string;
  }[];
}
