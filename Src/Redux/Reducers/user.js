import { loginFail, loginSuccess, LoginReques, LogOUt } from "../Types";
const initialState = {
  loading: false,
  data: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LoginReques:
      return { ...state, loading: true };
    case loginSuccess:
      return { ...initialState, data: action.payload };
    case loginFail:
      return { ...initialState };
    case "log_out":
      return { ...initialState };

    default:
      return state;
  }
};
