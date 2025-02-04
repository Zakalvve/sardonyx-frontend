import api from "@/core/api/api"
import { UserLogin, UserLoginResponse } from "@/modules/users/types/api"
import { AxiosResponse } from "axios"
import { useSardonyxQuery } from "@/core/hooks/useSardonyxQuery";


export const postUserLogin = (params: UserLogin): Promise<AxiosResponse<UserLoginResponse>> => {
    return api.post(`userAccess/authentication/login`, params).then(res => res)
}

const userClient = {
    login: (params: UserLogin) => useSardonyxQuery(postUserLogin, ['user-login'], params)
}

export default userClient;