import api from "@/core/api/api"
import { UserLogin, UserLoginResponse } from "@/modules/users/types/api"
import { AxiosResponse } from "axios"


export const postUserLogin = (params: UserLogin): Promise<AxiosResponse<UserLoginResponse>> => {
    return api.post(`userAccess/authentication/login`, params).then(res => res)
}

const userClient = {
    login: postUserLogin
}

export default userClient;