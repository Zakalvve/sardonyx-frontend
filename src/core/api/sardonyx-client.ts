import coreClient from "@/core/api/core-client";
import userClient from "@/modules/users/api/user-client";
import orchestratonClient from "@/modules/orchestration/api/orchestration-client";

const client = {
    core: coreClient,
    users: userClient,
    orchestration: orchestratonClient
}

export default client;