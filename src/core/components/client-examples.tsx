import { JSX, useEffect } from "react"
import { useSardonyxQuery } from "@/core/hooks/use-query"
import client from "@/core/api/sardonyx-client"

export const GetServerExample = (): JSX.Element => {

    const getServerParams = {
        serverId: '2466f276-8f5d-4c8b-b965-23b8f3005886'
    }

    const { data: getServerData, isPending: getServerIsPending, isError: getServerIsError, isSuccess: getServerIsSuccess, error: getServerError } = useSardonyxQuery(client.orchestration.getServerById, ['get-server'], getServerParams)

    useEffect(() => {
        console.log(getServerData)
    }, [getServerData])


    return (
        <div className="break-all p-3">
            <h2>Get Server</h2>
            {getServerIsPending && (<>Loading...</>)}
            {!getServerIsPending && getServerIsSuccess && (JSON.stringify(getServerData))}
            {!getServerIsPending && getServerIsError && (JSON.stringify(getServerError))}
        </div>
    )
}

export const LoginExample = (): JSX.Element => {
    const postUserLoginParams = {
        username: "Zakalwe",
        password: "Sardonyx24*"
    }

    const { data: postLoginData, isPending: postLoginIsPending, isError: postLoginIsError, isSuccess: postLoginIsSuccess, error: postLoginError } = useSardonyxQuery(client.users.login, ['user-login'], postUserLoginParams)

    useEffect(() => {
        console.log(postLoginData)
    }, [postLoginData])


    return (
        <div className="break-all p-3">
            <h2>User Login</h2>
            {postLoginIsPending && (<>Loading...</>)}
            {!postLoginIsPending && postLoginIsSuccess && (JSON.stringify(postLoginData))}
            {!postLoginIsPending && postLoginIsError && (JSON.stringify(postLoginError))}
        </div>
    )
}

export const GetEmailsExample = (): JSX.Element => {
    const { data: getEmailsData, isPending: getEmailsIsPending, isError: getEmailsIsError, isSuccess: getEmailsIsSuccess, error: getEmailsError } = useSardonyxQuery(client.core.getEmails, ['get-emails'])

    useEffect(() => {
        console.log(getEmailsData)
    }, [getEmailsData])

    return (
        <div className="break-all p-3">
            <h2>Get Emails</h2>
            {getEmailsIsPending && (<>Loading...</>)}
            {!getEmailsIsPending && getEmailsIsSuccess && (JSON.stringify(getEmailsData))}
            {!getEmailsIsPending && getEmailsIsError && (JSON.stringify(getEmailsError))}
        </div>
    )
}