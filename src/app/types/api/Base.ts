export interface IBaseResponse<T> {
  count: number;
  next: string;
  previous?: string;
  results: T[];
}

export interface IBaseDomain<T> {
  offset: number;
  results: T[];
}
