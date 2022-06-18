export * from './useDeleteUser';
export * from './useGetBeer';
export * from './useGetBeers';
export * from './useGetBeersCount';
export * from './useGetBeersLiked';
export * from './useGetBeersRecommend';
export * from './useGetBeerTypes';
export * from './useGetContinents';
export * from './useGetCountries';
export * from './useGetRecordsByBeer';
export * from './useGetTop3BeerFlavor';
export * from './useGetRecord';
export * from './useGetMyRecords';
export * from './useGetRecentlyVisitedCountry';
export * from './useGetUser';
export * from './useGetProfile';

export interface BasePagenationQueryHooksResponse<T extends any> {
  contents: T[];
  resultCount?: number;
  pageInfo: {
    hasNext?: boolean;
    nextCursor?: number;
  };
}
