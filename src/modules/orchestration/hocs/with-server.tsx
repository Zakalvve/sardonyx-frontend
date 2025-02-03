import React from "react"
import client from "@/core/api/sardonyx-client"
import { GetServerParams, GetServersParams } from "@/modules/orchestration/types/api"

export type ServerQueryResult = ReturnType<typeof client.orchestration.getServerById>;
export type ServersQueryResult = ReturnType<typeof client.orchestration.getServers>;

export function withServers<P>(
    WrappedComponent: React.ComponentType<P & ServersQueryResult>,
    params: GetServersParams
) {
    return function WithServerComponent (
        props: P
    ) {
        const query = client.orchestration.getServers(params)

        return (
            <WrappedComponent {...props} {...query}/>
        )
    }
}

export function withServer<P>(
    WrappedComponent: React.ComponentType<P & ServerQueryResult>,
    params: GetServerParams
) {
    return function WithServerComponent (
        props: P
    ) {
        const query = client.orchestration.getServerById(params)

        return (
            <WrappedComponent {...props} {...query}/>
        )
    }
}