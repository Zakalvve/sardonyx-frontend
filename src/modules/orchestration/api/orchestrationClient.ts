import api from "@/core/api/api"
import { AxiosResponse } from "axios"
import { GetServerParams, GetServersParams, GetServersResult, OrchestrationServer } from "@/modules/orchestration/types/api";
import { useSardonyxQuery } from "@/core/hooks/useSardonyxQuery";

const getServerById = (params: GetServerParams): Promise<AxiosResponse<OrchestrationServer>> => {
    return api.get(`orchestration/servers/${params.serverId}`).then(res => res);
}

const getServers = (params: GetServersParams): Promise<AxiosResponse<GetServersResult>> => {
    return api.get(`orchestration/servers`, {params})
}

const orchestratonClient = {
    getServers: (params: GetServersParams) => useSardonyxQuery(getServers, ['get-servers'], params),
    getServerById: (params: GetServerParams) => useSardonyxQuery(getServerById, ['get-server'], params),
}

export default orchestratonClient;