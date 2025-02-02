import api from "@/core/api/api"
import { AxiosResponse } from "axios"
import { GetServerParams, OrchestrationServer } from "@/modules/orchestration/types/api";

const getServerById = (params: GetServerParams): Promise<AxiosResponse<OrchestrationServer[]>> => {
    return api.get(`orchestration/servers/${params.serverId}`).then(res => res);
}

const orchestratonClient = {
    getServerById
}

export default orchestratonClient;