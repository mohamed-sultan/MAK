import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";

import NetInfo from "./NetInfo";
import Toast from "./Toast";
import User from "./user";

const config = {
  key: "root",
  storage,
  blacklist: ["sideMenu", "netInfo", "toast"]
};

export default persistCombineReducers(config, {
  netInfo: NetInfo,
  toast: Toast,
  user: User
});
