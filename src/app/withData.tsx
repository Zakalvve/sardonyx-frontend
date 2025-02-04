import { UseQueryResult } from "@tanstack/react-query";
import { useQueryFactory } from "../hooks/useQueryFactory";
import { QueryParams, QueryResult, QueryFactoryOptions, QueryFactoryParams, QueryFactoryResult } from "../types/querying";

export function withDataFactory<
    TParams extends QueryParams = QueryParams, 
    TResult extends QueryResult = QueryResult, 
    TOptions extends QueryFactoryOptions = QueryFactoryOptions
>(
    queryHook: (params: QueryFactoryParams<TParams, TOptions>) => UseQueryResult<QueryFactoryResult<TResult, TOptions>, Error>,
    options?: TOptions
) {
    return function HOC<TProps extends object = any>(
        WrappedComponent: React.ComponentType<
        TProps & ReturnType<typeof useQueryFactory<TResult, TParams, TOptions>>
        >,
        initialParams: QueryFactoryParams<TParams, TOptions>,
    ) {
        return function DataProviderComponent(props: TProps) {
            const queryResult = useQueryFactory(queryHook, initialParams, options);
            return <WrappedComponent {...props} {...queryResult} />;
        };
    };
}