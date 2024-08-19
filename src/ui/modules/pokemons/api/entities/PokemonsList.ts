import { IBaseDomain, IBaseResponse } from '@/app/types/api/Base';

export interface IPokemonsList {
  name: string;
  url: string;
}

export interface IPokemonsListResponse extends IBaseResponse<IPokemonsList> {}

export interface IPokemonsListDomain extends IBaseDomain<IPokemonsList> {}
