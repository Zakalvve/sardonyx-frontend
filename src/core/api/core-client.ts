import { AxiosResponse } from "axios"
import api from "./api"
import { GetEmailResponse } from "@/core/types/api"

const getEmails = (): Promise<AxiosResponse<GetEmailResponse[]>> => {
    return api.get(`userAccess/emails`).then(res => res)
}

const coreClient = {
    getEmails
}

export default coreClient;