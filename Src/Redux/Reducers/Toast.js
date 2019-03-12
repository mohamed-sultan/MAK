import { DoToast } from "../Types";

const initialState = {
  ms: "",
  color: "gray",
  duration: 1000
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DoToast:
      let color = action.color ? action.color : "gray";
      let duration = action.duration ? action.duration : 1000;
      let ms = action.ms ? action.ms : "";
      return { ...state, color, duration, ms };

    default:
      return state;
  }
};
