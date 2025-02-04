import client from "@/core/api/sardonyx-client"
import { withDataFactory } from "@/core/hocs/withData";

export const forwardServer = withDataFactory(client.orchestration.getServerById, { pagination: false })
export const forwardPaginatedServers = withDataFactory(client.orchestration.getServers, { pagination: true })