import { Button } from "@/core/components/ui/button";
import { forwardPaginatedServers, forwardServer } from "../hocs/withServer";
import { useEffect } from "react";

export type ServersDataTableProps = {
    test: string
}

export const ServersDataTable = forwardPaginatedServers<ServersDataTableProps>(({data: servers, isLoading, params, nextPage, prevPage, test }) => {
    if (isLoading){
        return <>Loading...</>
    }

    useEffect(() => {
        console.log(servers)
    }, [servers])

    return (
        <>
            {JSON.stringify(params)}
            {JSON.stringify(servers)}
            <Button onClick={prevPage}>Previous</Button>
            <Button onClick={nextPage}>Next</Button>
        </>
    )
})

export const ServerCard = forwardServer(({data: server, isLoading}) => {
    if (isLoading){
        return <>Loading...</>
    }

    return (
        <>ID: {server?.id}</>
    )
})