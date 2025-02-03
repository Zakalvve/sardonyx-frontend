export interface GetEmailResponse {
    id: string
    from: string
    to: string
    subject: string
    content: string
    date: Date
}

export interface PagedQueryParams {
    page: number
    perPage: number
}