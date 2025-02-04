import coreClient from "@/core/api/core-client";
import userClient from "@/modules/users/api/userClient";
import orchestratonClient from "@/modules/orchestration/api/orchestrationClient";

const client = {
    core: coreClient,
    users: userClient,
    orchestration: orchestratonClient
}

export default client;