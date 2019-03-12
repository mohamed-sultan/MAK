import { UpdateConnection } from "../Types";

export const UpdateConnectionStatus = isConnected => ({
  type: UpdateConnection,
  payload: isConnected
});
