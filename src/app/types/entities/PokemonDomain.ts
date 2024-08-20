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
