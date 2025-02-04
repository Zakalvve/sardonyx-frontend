import { PagedQuery, PagedResponse, QueryParams } from "@/core/types/querying"

export interface OrchestrationServer  {
    displayName: string
    url: string
    description: string
}

export interface GetServerParams extends QueryParams {
    serverId: string
}

export type GetServersParams = PagedQuery;
export type GetServersResult = PagedResponse<OrchestrationServer>