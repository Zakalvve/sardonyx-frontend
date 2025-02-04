export interface GetEmailResponse {
    id: string
    from: string
    to: string
    subject: string
    content: string
    date: Date
}