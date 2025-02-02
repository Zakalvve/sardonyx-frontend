import { QueryParams } from "@/core/types/querying"

export interface UserLoginResponse {
    isValid: boolean
    status: string
    error: string
    token: string
}

export interface UserLogin extends QueryParams {
    username: string
    password: string
}