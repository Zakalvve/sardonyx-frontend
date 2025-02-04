"use-client"

import { UseQueryResult } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { PagedQuery, PagedResponse, QueryFactoryOptions, QueryFactoryParams, QueryFactoryResult, QueryParams, QueryResult } from "../types/querying";

export function useQueryFactory<TResult extends QueryResult, TParams extends QueryParams, TOptions extends QueryFactoryOptions>(
    queryHook: (params: QueryFactoryParams<TParams, TOptions>) => UseQueryResult<QueryFactoryResult<TResult, TOptions>, Error>,
    initialParams: QueryFactoryParams<TParams, TOptions>,
    options?: TOptions
) {
    const [params, setParams] = useState<QueryFactoryParams<TParams, TOptions>>(initialParams);

    const query = queryHook(params);

    const isPagedResponse = (data: any): data is PagedResponse<TResult> => {
        return options?.pagination === true && data && typeof data.totalCount === 'number';
    };

    const hasPaginationFields = (p: any): p is PagedQuery => {
        return options?.pagination === true && p && typeof p.page === 'number' && typeof p.perPage === 'number';
    };

    const totalPages = isPagedResponse(query.data) && hasPaginationFields(params)
        ? Math.ceil(query.data.totalCount / (params.perPage || 1))
        : 1;

    const next = () => {
        setParams(p => ({ 
            ...p, 
            page: Math.min((p as PagedQuery).page + 1, totalPages)
        }))
    }

    const prev = () => {
        setParams(p => ({ 
            ...p, 
            page: Math.max((p as PagedQuery).page - 1, 1)
        }))
    }

    useEffect(() => {
        console.log(params)
    }, [params])

    return {
        ...query,
        params,
        setParams,
        totalPages,
        nextPage: isPagedResponse(query.data) && hasPaginationFields(params)
            ? next
            : undefined,
        prevPage: isPagedResponse(query.data) && hasPaginationFields(params)
            ? prev
            : undefined,
    };
}