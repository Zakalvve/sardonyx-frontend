export type QueryParamsOrUndefined = object | undefined
export type QueryParams = Exclude<QueryParamsOrUndefined, undefined>
export type QueryResult = any