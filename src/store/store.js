import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { todoReduser } from "./redusers/tododuser";

const root = combineReducers({
  todo: todoReduser,
});

export const store = createStore(root, applyMiddleware(thunk));
