export type QueryParamsOrUndefined = object | undefined
export type QueryParams = Exclude<QueryParamsOrUndefined, undefined>
export type QueryResult = any

export type QueryFactoryOptions = { pagination?: boolean; sorting?: boolean } | undefined;

export interface PagedQuery extends QueryParams {
    page: number;
    perPage: number;
}

export interface SortableQuery extends QueryParams {
    sortColumnName: string;
    isAsc: boolean;
    sortableColumns?: string[];
}

export interface PagedResponse<TData> extends QueryResult {
    items: TData[];
    totalCount: number;
}


// Ensures correct query parameters when pagination/sorting are enabled
export type QueryFactoryParams<TParams extends QueryParams, TOptions extends QueryFactoryOptions> = TParams &
    (TOptions extends { pagination: true } ? PagedQuery : {}) &
    (TOptions extends { sorting: true } ? SortableQuery : {});

// Ensures correct query response type when pagination is enabled
export type QueryFactoryResult<TResult extends QueryResult, TOptions extends QueryFactoryOptions> = TOptions extends { pagination: true } 
    ? PagedResponse<TResult> 
    : TResult;