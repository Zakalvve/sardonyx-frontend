import { Button } from "@/core/components/ui/button";
import { forwardPaginatedServers, forwardServer } from "../hocs/withServer";

export type ServersDataTableProps = {
    test: string
}

export const ServersDataTable = forwardPaginatedServers<ServersDataTableProps>(({data: servers, isLoading, params, nextPage, prevPage, test }) => {
    if (isLoading){
        return <>Loading...</>
    }

    return (<>
        {JSON.stringify(params)}
        {JSON.stringify(servers)}
        <Button onClick={prevPage}>Previous</Button>
        <Button onClick={nextPage}>Next</Button>
    </>)
}, {page: 1, perPage: 10})

const serverParams = {
    serverId: ''
}

export const ServerCard = forwardServer((props) => {
    return (
        <></>
    )
}, serverParams)