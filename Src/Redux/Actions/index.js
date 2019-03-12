import { UpdateConnectionStatus as _updateConnectionStatus } from "./NetInfo";

import { LOGIN } from "./login";
import { LOGINFB } from "./LoginFb";
import { LOGOUT } from "./logOut";
import { SIGNUP } from "./SignUp";

export const updateConnectionStatus = _updateConnectionStatus;

export const login = LOGIN;
export const logOut = LOGOUT;
export const loginFb = LOGINFB;
export const signup = SIGNUP;
