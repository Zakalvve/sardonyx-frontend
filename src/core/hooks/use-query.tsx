import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { QueryParamsOrUndefined, QueryResult } from '@/core/types/querying';

export const useSardonyxQuery = <
  TParams extends QueryParamsOrUndefined = undefined,
  TResult extends QueryResult = void
>(
    query: TParams extends undefined
        ? () => Promise<AxiosResponse<TResult>>
        : (params: TParams) => Promise<AxiosResponse<TResult>>,
    queryKey: any[],
    params?: TParams
) => {
    const finalQueryKey = params
        ? [...queryKey, ...Object.values(params)]
        : queryKey;

    return useQuery<TResult, Error>({
        queryKey: finalQueryKey,
        queryFn: async () => {
            const response = params
                ? (query as (params: TParams) => Promise<AxiosResponse<TResult>>)(params)
                : (query as () => Promise<AxiosResponse<TResult>>)();
            return (await response).data;
        },
    });
}