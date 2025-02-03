import { ServersQueryResult, withServers } from "../hocs/with-server";

export type ServersDataTableProps = ServersQueryResult & {
    test: string
}

const ServersDataTable = ({data: servers, isLoading, test}: ServersDataTableProps) => {
    console.log(test)
    if (isLoading){
        return <>Loading...</>
    }

    return (<>
        {JSON.stringify(servers)}
    </>)
}

export const TestTable = withServers(ServersDataTable, {page: 1, perPage: 10})