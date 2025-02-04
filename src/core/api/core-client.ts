import { AxiosResponse } from "axios"
import api from "./api"
import { GetEmailResponse } from "@/core/types/api"
import { useSardonyxQuery } from "../hooks/useSardonyxQuery"

const getEmails = (): Promise<AxiosResponse<GetEmailResponse[]>> => {
    return api.get(`userAccess/emails`).then(res => res)
}

const coreClient = {
    getEmails: () => useSardonyxQuery(getEmails, ['get-emails'])
}

export default coreClient;