import { LogOUt } from "../Types";
import { Toast } from "@common";

export const LOGOUT = navigaton => {
  Toast("logged out", "gray");
  navigaton.navigate("AuthStack");
  return {
    type: "log_out"
  };
};
