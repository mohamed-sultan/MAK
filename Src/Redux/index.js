import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "@reducer";

const middleware = [
  thunk
  // more middleware
];

export default compose(applyMiddleware(...middleware))(createStore)(reducers);
