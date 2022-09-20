import { REQUEST_STATE } from "app-configs";

export interface UserInfo {
  accessToken?: string;
  authState?: REQUEST_STATE,
}
